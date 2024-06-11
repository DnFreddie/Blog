<script lang="ts">
  import { getScrollPercentage } from "$lib/utils/utils.js";
  function scrollHandler() {
    let scrollPercentage = getScrollPercentage();
    if (scrollPercentage >= 13) {
      scrolled = true;
    } else {
      scrolled = false;
    }
  }
  export let data;
  let scrolled = false;
</script>

<svelte:window on:scroll={scrollHandler} />
<div
  class="niceone flex {scrolled
    ? 'bg-black'
    : 'bg-[#201C2C]'} justify-center w-full h-full"
>
  <div class="flex my-12">
    <div
      class="flex md:text-xl max-w-[1000px] text-white mx-2 text-xs text flex-col"
    >
      <h1
        class="text-4xl font-bold whitespace-normal py-4 text-[#b4befe] poemsBack"
      >
        Don't break easy, Preserve best version of your sytsem
      </h1>
      {@html data.mRender}
    </div>
  </div>
</div>

<style>
  .niceone {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: "Quicksand", sans-serif;
    transition: background-color 0.2s ease;
  }
</style>
