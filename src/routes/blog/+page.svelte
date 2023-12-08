<script lang="ts"> 
	/** @type {import('./$types').PageData} */
    export let data
</script>


<div class="flex-col" style="font-family: Arial, sans-serif; text-align: center; background-color: #f0f0f0; padding: 20px;">
    <div class="flex justify-center ">
        <section style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">

            <h1>Welcome to my blog</h1>

            {#each data.posts as post}
            <div class="post-container" style="border: 1px solid #ddd; padding: 10px; margin: 10px; border-radius: 4px;">
                    <a href={`/blog/${post.hash}`}>
                <h2 style="font-size: 20px; margin-bottom: 5px;">{post.title}</h2>
                    </a>
                <p class="post-hash" style="color: #666; font-size: 14px;">{post.hash}</p>
                <p class="post-date" style="color: #888; font-size: 12px;">{post.date}</p>
            </div>
            {/each}
        </section>
    </div>
</div>

