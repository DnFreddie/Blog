<script lang="ts">
    import { getContext} from "svelte";
    import type { BlogPost } from "./utils";
    import SearchCards from "./searchCards.svelte";
    async function fetchBlogPosts(): Promise<BlogPost[]> {
        try {
            const response = await fetch('/api/posts');
            const jsonData: BlogPost[] = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            throw error;
        }
    }

    let data: BlogPost[] = getContext("blogPost")||[]

    let open: boolean
  async function fetchHandler() {
    if (data.length === 0) {
      data = await fetchBlogPosts();
    }
  }
    const toggleHandler = async () => {
    await fetchHandler();
open=!open
  };



</script>



 <div class="flex-1 justify-center flex">
    <button    on:click={toggleHandler}
      class="search-box bg-[#182233] border border-gray-300 rounded-2xl w-[300px] sm:w-[400px] py-2 flex items-center justify-start space-x-2"
    >
      <span class="material-symbols-outlined text-white"> search </span>
      <p class="text-gray-300">Search</p>
    </button>
  </div>

    {#if open }



<SearchCards results={data} bind:open={open}/>



    {/if  }







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

