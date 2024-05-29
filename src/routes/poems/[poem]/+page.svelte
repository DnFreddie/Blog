<script lang="ts">
  import WaitScreen from '$lib/utils/wait_screen.svelte';
  export let data;

  let backgroundColor = ["black", "black", "black"];
  
  function setBackgroundColor(colors: string[]) {
    backgroundColor = colors;
  }
</script>

<div
  class="flex min-h-screen flex-col md:flex-row items-center justify-center p-4 md:pb-36 pt-10 bg-white shadow-xl overflow-hidden poemsBack"
  style="background: linear-gradient(to right, {backgroundColor[0]}, {backgroundColor[1]}, {backgroundColor[2]});"
>
  {#await data.p.item}
    <WaitScreen />
  {:then item}
    <div class="hidden">

    {setBackgroundColor(item.bacground)}
        </div>
    <img src={item.img} class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 object-cover" alt="Poem Background" />
    <div class="w-full md:w-1/2 flex flex-col justify-center items-center space-y-4 p-4">
               <p class="text-2xl font-bold text-white">
      {item.title?.charAt(0).toUpperCase() +
        item.title?.slice(1).replaceAll("-", " ")}
    </p>
      <div class="space-y-4">
        <p class="text-white whitespace-pre-line">{item.body?.replaceAll("\\n", "\n").replaceAll("\\", "")}</p>
        <audio controls class="rounded-lg">
          <source src={item.music} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  {:catch error}
    <p>Error: {error.message}</p>
  {/await}
</div>

<style>
  .poemsBack {
    font-family: "Quicksand", sans-serif;
  }
</style>

