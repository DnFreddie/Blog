<script lang="ts">
  //animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  import WaitScreen from "$lib/utils/wait_screen.svelte";

  import type { BlogPost } from "$lib/utils/utils.js";
  export let data;

  function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const paddedMonth = month.toString().padStart(2, "0");
    const paddedDay = day.toString().padStart(2, "0");

    return `${paddedDay}.${paddedMonth}.${year}  `;
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

  const quicSort = (data: BlogPost[]) => {
    return data.sort((a, b) => b.date.localeCompare(a.date));
  };
</script>

<div
  class="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#885cd1] via-black to-[#002a41] p-6"
>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 gap-2">
      {#await data.posts.item}
        <WaitScreen />
      {:then item}
        {#each quicSort(item) as post}
          <a href={`/blog/${post.title}`}>
            <div
              class="p-4 flex flex-row justify-between text-white postAnime post-box space-x-6"
            >
              <div class="flex-col flex">
                <h2 class="text-xl font-semibold mb-2">
                  {formatString(post.title)}
                </h2>
                <p class="text-gray-400 text-sm mb-2">
                  {formatTimestamp(post.date)}
                </p>
                <p class="text-gray-300 hidden lg:block italic">
                  {post.short_desc}
                </p>
              </div>
              <img src={post.cover_img} alt="" class="rounded max-w-[100px]" />
            </div>
          </a>
        {/each}
      {/await}
    </div>
  </div>
</div>

<style>
  .postAnime {
    transition: transform 0.3s ease;
  }

  .postAnime:hover {
    transform: scale(1.02);
  }

  .post-box {
    border-radius: 20px;
    box-shadow: 10px 10px 20px grey;
    border: 2px solid fuchsia;
    height: 140px;
    background: black;
    width: 100%;
  }

  @keyframes anime {
    0% {
      width: 100%;
      height: 40px;
      box-shadow: 5px 5px 10px grey;
      opacity: 0.5;
    }
    100% {
      background: black;
      box-shadow: 10px 10px 20px grey;
    }
  }
</style>
