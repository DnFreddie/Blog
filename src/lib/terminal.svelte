
    <div class=" bg-gradient-to-b from-[#895cd1] via-[#2b125f] to-[#3f0f4c] items-center">

    <div class=" flex  lg:ml-20 justify-start sm:items-center  lg:items-start md:items-center px-6 ">

  <div class="flex flex-col items-center md:flex-row mt-10 gap-24 space-x-0 md:space-x-6">
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
            <p class="font-bold text-white text-center">I've been learning Linux for 2 years <br>Never got enough of it</p>
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
  import { onMount } from 'svelte';

  let canvas;
  let ctx;
  let animationId;
  let prevWidth;
  let prevHeight;
  let particles = [];
  const sentence = "Linux Lover";
  let explode = false; // Flag to control the explosion

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
    }

    draw() {
      ctx.fillStyle = 'orange';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'orange';
    ctx.textAlign = 'center';
    ctx.fillText(sentence, canvas.width / 2, canvas.height / 2);

    setTimeout(() => {
      explode = true;
      particles = [];
      const numberOfParticles = sentence.length * 100;
      for (let i = 0; i < numberOfParticles; i++) {
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        particles.push(new Particle(x, y));
      }
    }, 5000); // Delay before the explosion starts
  }

  function scaleParticlePositions() {
    const scaleX = canvas.width / prevWidth;
    const scaleY = canvas.height / prevHeight;

    particles.forEach(particle => {
      particle.x *= scaleX;
      particle.y *= scaleY;
    });

    prevWidth = canvas.width;
    prevHeight = canvas.height;
  }

  function animate() {
    if (explode) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText(sentence, canvas.width / 2, canvas.height / 2);
    }
    animationId = requestAnimationFrame(animate);
  }

  function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (!explode) {
      ctx.font = '30px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.fillText(sentence, canvas.width / 2, canvas.height / 2);
    }
    scaleParticlePositions();
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    init();
    animate();
  });

</script>


