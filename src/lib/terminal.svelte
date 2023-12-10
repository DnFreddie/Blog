
    <div class=" bg-gradient-to-b from-[#895cd1] via-[#2b125f] to-[#3f0f4c] items-center">

    <div class=" flex  lg:ml-20 justify-start sm:items-center  lg:items-start md:items-center px-6 ">

  <div class="flex flex-col items-center md:flex-row mt-20 gap-24 space-x-0 md:space-x-6">
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
            <p class="font-bold text-white text-center">I've learned Linux for 2 years.<br>Never got enough of it</p>
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
     <script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    let canvas;
    let ctx;
    let adjustX = 0;
    let adjustY = -10;
    let textCoordinates;
    let particleArray = [];
    let isExploding = false;
    let animationId;
    let resizeTimeout;

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
    const startX = (canvas.width - textCoordinates.width) / 2;
    const startY = (canvas.height - textCoordinates.height) / 2;
    const skipPixels = 5; // Skip every 5 pixels

    for (let y = 0, y2 = textCoordinates.height; y < y2; y += skipPixels) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x += skipPixels) {
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                let positionX = x + startX;
                let positionY = y + startY;
                particleArray.push(new Particle(positionX, positionY));
            }
        }
    }
}


function animateText(resolve) {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and explode particles
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        if (isExploding) {
            particleArray[i].explode();
        }
    }

    // Continue the animation
    requestAnimationFrame(() => animateText(resolve));
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
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        const fontSize = Math.floor(canvas.width / 10);
        ctx.font = `bold ${fontSize}px Verdana`;

        const text = 'Linux Lover';
        const textWidth = ctx.measureText(text).width;
        const x = (canvas.width - textWidth) / 2;
        const y = (canvas.height / 2) + (fontSize / 2);

        ctx.fillStyle = 'white';
        ctx.fillText(text, x, y);

        // Capture the text in an image data
        textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Initialize particles based on the text
        init();

        // Set a timeout to start the explosion
        setTimeout(() => {
            isExploding = true;
        }, 3000);

        // Start the animation
        animateText(resolve);
    });
}

    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (typeof window !== 'undefined') {
                resizeCanvas();
            }
        }, 100);
    }

    function resizeCanvas() {
        // Set canvas dimensions based on its container size
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Redraw or reinitialize canvas content here
        linuxExplosion().then(() => {
            // Additional logic after reinitializing, if needed
        });
    }

    //onMount(() => {
      //  if (typeof window !== 'undefined') {
       //     ctx = canvas.getContext('2d');
         //   resizeCanvas(); // Initial resize
         //   window.addEventListener('resize', handleResize);
       // }
   // });

    //nDestroy(() => {
       // if (typeof window !== 'undefined') {
      //      window.removeEventListener('resize', handleResize);
        //    cancelAnimationFrame(animationId);
        //}
    //});
</script>
