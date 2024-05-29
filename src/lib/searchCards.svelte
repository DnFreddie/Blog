<script lang="ts">
  import { getContext } from "svelte";
  import type { BlogPost } from "./utils";

  let results: BlogPost[] = getContext("blogPost") || [];
  export let open: boolean = false;
  let searchValue = "";

  async function fetchBlogPosts(): Promise<BlogPost[]> {
    try {
      const response = await fetch("/api/posts");
      const jsonData: BlogPost[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      throw error;
    }
  }

  async function fetchHandler() {
    if (results.length === 0) {
      results = await fetchBlogPosts();
    }
  }

  document.addEventListener("click", function (event) {
    const searchBox = document.querySelector(".search-box");
    const isClickInsideSearchBox = searchBox?.contains(event.target as Node);
    const isInput = (event.target as Element).classList.contains(
      "search-input",
    );

    if (!isClickInsideSearchBox && !isInput) {
      open = false;
    }
  });

  function formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const paddedMonth = month.toString().padStart(2, "0");
    const paddedDay = day.toString().padStart(2, "0");
    return `${year}-${paddedMonth}-${paddedDay}`;
  }

  function formatString(str: string): string {
    let formattedStr = str.replace(".md", "").replace(/_/g, " ");
    return formattedStr
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  let searchPosts: BlogPost[];
  $: searchPosts = results.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });
</script>

<div
  class="flex flex-col items-center justify-center absolute w-full top-0 sm:top-28 pt-4 z-50"
>
  <div class="search-box w-3/4 sm:w-1/2">
    <label for="search" class="flex items-center w-full">
      <span class="material-symbols-outlined text-[#578aa8]"> search </span>
      <input
        class="search-input w-3/4 sm:w-full"
        type="search"
        id="search"
        placeholder="Search"
        bind:value={searchValue}
        autofocus
        autocomplete="off"
      />
    </label>
  </div>
  <div class="search-results w-3/4 md:w-1/2 lg:w-1/2 xl:w-2/5">
    {#await fetchHandler()}

    {:then}
      {#if searchValue !== ""}
        {#each searchPosts as post}
          <a href={`/blog/${post.title}`} class="no-underline blog-card">
            <div>
              <h2 class="blog-title">{formatString(post.title)}</h2>
              <p class="blog-date">{formatTimestamp(post.date)}</p>
            </div>
          </a>
        {/each}
      {/if}
    {:catch error}
      <p>Error loading posts: {error.message}</p>
    {/await}
  </div>
</div>
<div class="blurred-overlay bg-gray-800 opacity-80"></div>

<style>
  .search-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #334155;
    border-radius: 8px;
    max-width: 800px;
    padding: 16px;
  }

  .search-input {
    flex: 1;
    color: white;
    padding: 12px 16px;
    font-size: 1rem;
    border: none;
    outline: none;
    background-color: #334155;
    border-radius: 8px;
  }

  .search-results {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .blog-card {
    border: 2px solid #f53b57;
    background-color: #111827;
    padding: 12px;
    margin-bottom: 8px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .blog-title {
    color: #f9fafb;
    margin-bottom: 4px;
    font-size: 1.25rem;
  }

  .blog-date {
    color: #9ca3af;
    font-size: 0.875rem;
  }

  .no-underline {
    text-decoration: none;
  }

  .blurred-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
</style>
