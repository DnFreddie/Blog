    
<script lang="ts">
  import { onDestroy, tick } from 'svelte';

  let images = ["placeHolder_table.png", "pythonImage.png"];
  let currentImage = images[0];
  let currentIndex = 0;
  let fadeClass = 'image-fade-in';

  async function changeImage() {
    fadeClass = 'image-fade-out';
    await tick(); 
    await new Promise(r => setTimeout(r, 1000)); 

    currentIndex = (currentIndex + 1) % images.length;
    currentImage = images[currentIndex];
    
    fadeClass = 'image-fade-in';
    await tick(); 
    await new Promise(r => setTimeout(r, 3000)); 
  }

  const interval = setInterval(changeImage, 5000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>



<div class="bg-gradient-to-b from-[#3f0f4c] via-[#29148a] to-[#1d58a0] flex items-center justify-end">

       <div class="bg-[#191449] p-14 rounded-lg  animate-float">
            <p class="font-bold text-white text-center">At work i utilze Python to modyfie datasets<br>At home i wirte scripts to enhance DX </p>
        </div>


    <section class="flex flex-col items-end  pt-64 px-44"> <!-- Adjust for centering -->

        <div class="border-gray-300 flex items-center flex-col ">
            <div class="order-1 md:order-2 carousel flex flex-col rounded-lg z-10 w-[600px] mx-auto"> <!-- Set width to match the image and center it -->
                <div class="bg-white p-2 shadow-md">
                    <div class="flex items-center space-x-2"> 
                        <div class="flex">
                            <input type="text" class="px-3 py-1 border font-bold text-violet-800 rounded hover:bg-gray-100 pl-10" value="Not scared of Data or Scriptig" readonly style="cursor: not-allowed;">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-search text-gray-500"></i>
                            </span>
                        </div>
                        <span class="material-symbols-outlined">undo</span>
                        <span class="material-symbols-outlined">redo</span>
                        <span class="material-symbols-outlined">print</span>
                        <span class="material-symbols-outlined">imagesearch_roller</span>

                        <button class="px-3 py-1 hover:bg-gray-100">100%</button>
                        <span class="material-symbols-outlined">arrow_drop_down</span>
                        <span class="material-symbols-outlined">percent</span>
                        <span class="material-symbols-outlined">format_bold</span>

                        <div class="flex-grow"></div>

                        <button class="p-2 hover:bg-gray-100">
                            <i class="fas fa-star text-gray-600"></i>
                        </button>
                        <button class="p-2 hover:bg-gray-100">
                            <i class="fas fa-comment-alt text-gray-600"></i>
                        </button>
                    
                    </div>
                </div>
            </div>
        </div>

    <img src={currentImage} alt="Excel-like table" class={`w-[600px] h-[600px] rounded-lg border-4 border-gray-300 shadow-xl ${fadeClass}`}>


    </section>
</div>
<style>
  @keyframes floatAnimation {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

@keyframes fadeInAnimation {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeOutAnimation {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

.image-fade-in {
  animation: fadeInAnimation 5s ease-in-out;
}

.image-fade-out {
  animation: fadeOutAnimation 5s ease-in-out;
}

</style>
