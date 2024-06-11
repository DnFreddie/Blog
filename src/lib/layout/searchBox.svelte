<script lang="ts">
  import SearchCards from "./searchCards.svelte";

  let open: boolean;

  const toggleHandler = async () => {
    open = !open;
  };
</script>

<div class="flex-1 justify-center flex">
  <button
    on:click={toggleHandler}
    class="search-box bg-[#182233] border border-gray-300 rounded-2xl w-[300px] sm:w-[400px] py-2 flex items-center justify-start space-x-2"
  >
    <span class="material-symbols-outlined text-white"> search </span>
    <p class="text-gray-300">Search</p>
  </button>
</div>

{#if open}
  <SearchCards bind:open />
{/if}

<style>
  .search-box {
    background-color: #182233;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
  }
</style>
