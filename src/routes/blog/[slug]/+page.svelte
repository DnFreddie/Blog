<script lang="ts">
  /** @type {import('./$types').PageData} */
  function formatString(str: string) {
    let formattedStr = str.replace(".md", "");

    formattedStr = formattedStr.replace(/_/g, " ");

    formattedStr = formattedStr
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedStr;
  }

  export let data;
</script>

<div class="flex flex-col min-h-screen">
  <div class="bg-black flex-grow text-gray-200">
    <div class="flex justify-center items-center h-full md:mx-40 sm:mx-10">
      <div
        class=" mb-9 md:mt-16 space-y-8 text-white bg-gray-800 border-2 border-[#1e2836] rounded-lg p-4"
      >
        <h1
          class="text-4xl font-bold whitespace-normal text-purple-800 poemsBack"
        >
          {formatString(data.title)}
        </h1>
        <div class="items-center justify-center flex">
          <div
            class="2xl:w-3/4 md:text-2xl whitespace-break-spaces items-center sm:text-xl text-sm break-words font-medium poemsBack"
          >
            {@html data.content}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .poemsBack {
    font-family: "Quicksand", sans-serif;
  }
</style>
