<script lang="ts">
   let canvas;
    import { onMount } from 'svelte';

    let ctx;
    let adjustX = 0;
    let adjustY = -10;
    let textCoordinates;
    let particleArray = [];
    let isExploding = false;
    let animationId;

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 3;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
            this.angle = Math.random() * (2 * Math.PI);
            this.speed = Math.random() * 5 + 1;
            this.distance = 0;
        }

        draw() {
            ctx.fillStyle = 'orange';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        explode() {
            this.distance += this.speed;
            this.x = this.baseX + Math.cos(this.angle) * this.distance;
            this.y = this.baseY + Math.sin(this.angle) * this.distance;
        }
    }

    function init() {
        particleArray = [];
        for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
            for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
                if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                    let positionX = x + adjustX;
                    let positionY = y + adjustY;
                    particleArray.push(new Particle(positionX * 10, positionY * 10));
                }
            }
        }
    }

    function animateText(resolve) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let allParticlesEscaped = true;
        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].draw();
            if (isExploding) {
                particleArray[i].explode();
            }

            if (particleArray[i].x > 0 && particleArray[i].x < canvas.width && particleArray[i].y > 0 && particleArray[i].y < canvas.height) {
                allParticlesEscaped = false;
            }
        }
        connect();
        if (allParticlesEscaped) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationId);
            resolve();
        } else {
            animationId = requestAnimationFrame(() => animateText(resolve));
        }
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particleArray.length; a++) {
            for (let b = a; b < particleArray.length; b++) {
                let dx = particleArray[a].x - particleArray[b].x;
                let dy = particleArray[a].y - particleArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 20) {
                    opacityValue = 1 - (distance / 20);
                    ctx.strokeStyle = `rgba(255,255,255,${opacityValue})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(particleArray[a].x, particleArray[a].y);
                    ctx.lineTo(particleArray[b].x, particleArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function linuxExplosion() {
        return new Promise((resolve) => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.font = 'bold 25px Verdana';
            ctx.fillStyle = 'white';
            ctx.fillText('Linux ', 0, 30);
            ctx.fillText(' Lover', 0, 60);
            textCoordinates = ctx.getImageData(0, 0, canvas.width, 120);
            init();
            animateText(resolve);
            setTimeout(() => {
                isExploding = true;
            }, 3000);
        });
    }
       class Pane {
        constructor(x, y, width, height, c) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.c = c;
        }

        draw() {
            this.c.beginPath();
            this.c.rect(this.x, this.y, this.width, this.height);
            this.c.strokeStyle = 'red';
            this.c.stroke();
        }
    }
       onMount(async () => {
        ctx = canvas.getContext('2d');
        await linuxExplosion();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });


</script>
    <div class=" bg-gradient-to-b from-[#895cd1] via-[#2b125f] to-[#3f0f4c]">

    <div class=" flex  ml-20 justify-start">

  <div class="flex flex-col items-center md:flex-row mt-20 space-x-0 md:space-x-6">
        <div class="flex flex-col space-y-0">
            <div class="w-full md:w-120 bg-gray-800 space-x-4 flex rounded-t-sm md:rounded-t-none justify-start items-center px-6 py-2"> 
                <div class="w-6 h-6 bg-red-500 rounded-full"></div>
                <div class="w-6 h-6 bg-yellow-400 rounded-full"></div>
                <div class="w-6 h-6 bg-green-500 rounded-full"></div>
            </div>
            <div class="bg-black border border-gray-500 rounded-b-lg w-full md:w-120 h-96 relative shadow-2xl">
                <div class="flex justify-center items-center h-full w-full rounded-lg ">
                    <canvas bind:this={canvas} class="w-full h-full bg-gray-900 rounded-lg"></canvas>
                </div>
            </div>
        </div>
 
                 <div class=" terminalBanner bg-[#331233] p-14 rounded-lg">
            <p class="font-bold text-white text-center">I've learned Linux for 2 years.<br><br>Never got enough of it</p>
        </div>

    </div>
</div>
</div>

    <style>
        @keyframes floatAnimation {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }

    .terminalBanner {
        animation: floatAnimation 3s ease-in-out infinite;
    }
</style>
