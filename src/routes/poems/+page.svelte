<script lang="ts">
  export let data;
</script>

<div class="min-h-screen bg-gray-900">
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 lg:gap-8 2xl:px-32 lg:px-8 py-10 sm:px-2 px-4"
  >
    {#each data.poems as { title, img, date }}
      <div class="">
        <div class=" p-4 bg-transparent rounded-lg">
          <a href="/poems/{title}">
            <img src={img} alt="" class="rounded-lg w-full aspect-video" />
          </a>
          <div class="flex flex-col py-2">
            <p class="text-gray-500 italic">{date}</p>
            <a href="/poems/{title}">
              <p class="text-2xl font-semibold text-white">
                {title.charAt(0).toUpperCase() +
                  title.slice(1).replaceAll("-", " ")}
              </p>
            </a>
          </div>
          <div class="text-white flex-row flex items-center space-x-2">
            <a class="post-author" href="#">
              <img
                class="rounded-full"
                src="/logo.ico"
                alt=""
                width="38"
                height="38"
              />
            </a>
            <span class="text-xs italic">Soon there will be an NFT </span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
</style>
