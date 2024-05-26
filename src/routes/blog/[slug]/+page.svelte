<script lang="ts">
import WaitScreen from "$lib/utils/wait_screen.svelte";
  import { getScrollPercentage } from "$lib/utils";
  import { renderMarkdown } from "$lib/mdRender";
  function scrollHandler() {
    let scrollPercentage = getScrollPercentage();
    if (scrollPercentage >= 4) {
      scrolled = true;
    } else {
      scrolled = false;
    }
  }
  function formatString(str: string) {
    let formattedStr = str.replace(".md", "");
    formattedStr = formattedStr.replace(/_/g, " ");
    formattedStr = formattedStr
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedStr;
  }

  let scrolled = false;
  export let data;
</script>

<svelte:window on:scroll={scrollHandler} />
<div
  class="niceone flex justify-center min-h-screen  w-full h-full {scrolled? 'bg-black': 'bg-[#201C2C]'} ">
  <div class="flex my-12">
    <div
      class="flex md:text-xl max-w-[1000px] text-white mx-2 text-xs text flex-col"
    >
      <h1
        class="text-4xl font-bold whitespace-normal py-4 text-[#b4befe] poemsBack"
      >
        {formatString(data.p.title)}
      </h1>
          {#await data.p.content}

                <WaitScreen/>

        {:then blob}
          {@html renderMarkdown(blob)}
         {:catch error}
          <p>Error: {error.message}</p>
        {/await}


    </div>
  </div>
</div>
<style>
  .niceone {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: "Quicksand", sans-serif;
    transition: background-color 0.8s ease;
  }
</style>
