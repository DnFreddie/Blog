<script lang="ts">
  import WaitScreen from "$lib/utils/wait_screen.svelte";
  import { renderMarkdown } from "$lib/utils/mdRender";
  import { getScrollPercentage } from "$lib/utils/utils.js";
  import LabButton from "$lib/utils/lab_button.svelte";
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
  class="niceone flex justify-center min-h-screen w-full h-full {scrolled ? 'bg-black' : 'bg-[#201C2C]'}"
>
  {#await data.p.content}
    <WaitScreen />
  {:then blob}
    <div class="flex my-12">
      <div class="flex md:text-xl max-w-[1000px] text-white mx-2 text-xs flex-col">
        <div class="flex-row flex">
          <h1 class="text-xl sm:text-2xl xl:text-4xl font-bold whitespace-normal py-4 text-[#b4befe] poemsBack">
            {formatString(data.p.title)}
          </h1>
         {#if data.p.lab_url && data.p.lab_url != "" }
          <div class="mb-2 sm mx-4">
            <LabButton labUrl={data.p.lab_url} />
          </div>
         {/if}
        </div>
        {@html renderMarkdown(blob)}
      </div>
    </div>
  {:catch error}
    <p>Error: {error.message}</p>
  {/await}
</div>

<style>
  .niceone {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: "Quicksand", sans-serif;
    transition: background-color 0.8s ease;
  }
</style>
