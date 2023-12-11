<script lang="ts"> 
	/** @type {import('./$types').PageData} */
    import { getContext } from 'svelte'

    const data = getContext('my-var')

    data.sort((a, b) => {
        return b.date.localeCompare(a.date);
    });
    function copyHash(hash:string){
        console.log(hash)

    }
</script>
<div class="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#895cd1] via-[#2b125f] to-[#3f0f4c] ">
    <section class="w-full max-w-md p-4">
        <h1 class="text-2xl font-bold text-center mb-6">Welcome to my blog</h1>
        {#each data as post } 
            <div class="break-words text-white mb-4 bg-black shadow rounded p-4">
                <div class="flex justify-between">
                    <a href={`/blog/${post.title}`} class="text-xl font-semibold hover:underline">
                        <h2>{post.title}</h2>
                    </a>

            <div class=" flex sm:bg-none p-1 bg-gray-800 rounded-lg" >



                    
                        <button type="button" class="hover:bg-gray-200  c rounded-lg" on:click|stopPropagation={() => copyHash(post.hash)} >
                <span class=" material-symbols-outlined">tag</span>

                        </button>
                        </div>




        </div>
        <p class="text-gray-600 text-sm">{post.date}</p>
    </div>
{/each}
                       </section>
</div>
