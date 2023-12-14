<script lang="ts">
  import { getContext } from 'svelte';
  const data = getContext('my-var');
  let searchValue = '';
  let visiblePosts = [];
  let isOverlayVisible = false;

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    // Format the date and time parts
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Pad single digit minutes and seconds with a leading zero
    const paddedMonth = month.toString().padStart(2, '0');
    const paddedDay = day.toString().padStart(2, '0');
    const paddedHours = hours.toString().padStart(2, '0');

    // Combine the parts into a readable format
    return `${year}-${paddedMonth}-${paddedDay}  `;
}

function formatString(str) {
    let formattedStr = str.replace('.md', '');

    formattedStr = formattedStr.replace(/_/g, ' ');

    formattedStr = formattedStr.split(' ')
                               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                               .join(' ');

    return formattedStr;
}





  $: visiblePosts = searchValue.trim()
    ? data.filter(post => 
        post.title.toLowerCase().includes(searchValue.toLowerCase())).slice(0, 3)
    : [];

  const toggleOverlay = (visible) => {
      setTimeout(() => {
             isOverlayVisible = visible;

      },109)


  };
  const handleLinkClick = () => {
    searchValue = ''; 
  };
</script>

<style>
  .search-results {
    position: absolute;
    top: 100%; 
    left: 0;
    z-index: 50;
    width: 100%; 
  }
</style>

<div class="flex flex-col relative pb-7">
  <div class="flex flex-col rounded-lg relative z-20 bg-[#1e2836] w-1/3 p-4 shadow-md lg:min-w-[500px] min-w-[300px]">
    <label class="text-lg font-bold text-white mb-2" for="search">
      Definitely not what you think...
    </label>
    <input 
      class="rounded-lg bg-black border border-gray-600 hover:border-gray-500 focus:border-[#D0321] focus:outline-none text-white px-4 py-2" 
      type="search" 
      id="search"
      placeholder="Interested in my blog..."
      bind:value={searchValue}
      on:focus={() => toggleOverlay(true)}
      on:blur={() => toggleOverlay(false)}>
  </div>

  {#if isOverlayVisible}
    <div class="fixed inset-0 bg-black bg-opacity-80"></div>

  <div class="search-results">
    {#each visiblePosts as post}
      <div class="border-2   p-2 mb-2 rounded bg-black z-40 border-fuchsia-500">
        <a href={`/blog/${post.title}`} class="no-underline" on:click={handleLinkClick}>
          <h2 class="text-xl mb-1 text-white">{formatString(post.title)}</h2>
        </a>
        <p class="text-gray-400 text-xs">{formatTimestamp(post.date)}</p>
      </div>
    {/each}
  </div>
  {/if}
</div>

