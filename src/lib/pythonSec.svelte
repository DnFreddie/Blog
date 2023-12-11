<script lang="ts">
  import { onDestroy, tick } from 'svelte';
  import IntersectionObserver from "svelte-intersection-observer";

  let images = ["pythonImage.png", "placeHolder_table.png"];
  let currentImage = images[0];
  let currentIndex = 0;
  let fadeClass = 'image-visible'; 
  let intersecting  
  let banner: HTMLElement;
  let interval;
  function setupInterval() {
    interval = setInterval(changeImage, 5000); // Set up interval
  }

  function clearExistingInterval() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  async function changeImage() {
    fadeClass = 'image-fade-out';
    await tick(); 
    await new Promise(r => setTimeout(r, 1000));

    currentIndex = (currentIndex + 1) % images.length;
    currentImage = images[currentIndex];
    fadeClass = 'image-invisible'; 
    await tick();

    fadeClass = 'image-fade-in';
    await new Promise(r => setTimeout(r, 1000)); 
  }

  onDestroy(clearExistingInterval);

  $: if (intersecting ) {
    setupInterval();
  } else {
    clearExistingInterval();
  }
</script>

<div class="bg-gradient-to-b from-[#3f0f4c] via-[#29148a] to-[#1d58a0] ">
    <div class="flex px-4 pt-28 pr-50 items-center gap-56  justify-end  md:flex-row md:pr-28"> 

        <div class="bg-[#191449] p-4 md:p-14 rounded-lg animate-float md:flex animate-float items-center hidden ">
            <p class="font-bold text-white text-center">At work I utilize Python to modify datasets<br>At home I write scripts to enhance DX</p>
        </div>

        <section class="flex flex-col w-full border-4  md:w-auto rounded-lg min-w-[340px]  "> 
            <div class=" flex bg-white justify-between ">
                <div class="flex gap-2">
                    <span class="material-symbols-outlined">search</span>

                    <input type="text" readonly class="w-1/2 md:w-full hidden md:flex font-bold text-violet-800 "  value="Not scared of Data "> 
                </div>
                <div class="flex space-x-1">
                    <span class="material-symbols-outlined">undo</span>
                    <span class="material-symbols-outlined">redo</span>
                    <span class="material-symbols-outlined">print</span>
                    <span class="material-symbols-outlined">imagesearch_roller</span>
                    <button class="hover:bg-gray-100">100%</button>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                    <span class="material-symbols-outlined">percent</span>
                    <span class="material-symbols-outlined">format_bold</span>
                </div>
            </div>
                
        <div class="imgs w-full"> 
            <IntersectionObserver bind:intersecting threshold={0.8}  element={banner}>
            <img bind:this={banner} src={currentImage} alt="Excel-like table" class={`min-w-[340px] min-h-[400px] md:w-[600px] md:h-[600px]  border-4 border-gray-300 shadow-xl ${fadeClass}`}>
            </IntersectionObserver>
        </div>
        </section>
    </div>
</div>

    
<style>
  @keyframes floatAnimation {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes fadeInAnimation {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOutAnimation {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  .image-visible {
    opacity: 1;
  }

  .image-invisible {
    opacity: 0;
  }

  .image-fade-in {
    animation: fadeInAnimation 1s ease-in-out forwards;
  }

  .image-fade-out {
    animation: fadeOutAnimation 1s ease-in-out forwards;
  }
.animate-float {
    animation: floatAnimation 3s ease-in-out infinite;
}
</style>

