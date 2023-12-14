<script lang="ts"> 
	/** @type {import('./$types').PageData} */
    import { getContext } from 'svelte'

  
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
    // Remove the file extension
    let formattedStr = str.replace('.md', '');

    // Replace underscores with spaces
    formattedStr = formattedStr.replace(/_/g, ' ');

    // Capitalize the first letter of each word
    formattedStr = formattedStr.split(' ')
                               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                               .join(' ');

    return formattedStr;
}
    const data = getContext('my-var')

    data.sort((a, b) => {
        return b.date.localeCompare(a.date);
    });



    function copyHash(hash:string){


  navigator.clipboard.writeText(hash);
    }

    </script>
<div class="flex flex-col items-center min-h-screen  bg-gradient-to-b from-[#885cd1] via-black to-[#002a41]  ">

    <section class="w-full max-w-md p-4">
        <h1 class="text-2xl font-bold text-center mb-6">Most Recent Posts </h1>
        {#each data as post } 
            <div class="break-words text-white mb-4 bg-black shadow rounded p-4 post-box" >
                <div class="flex justify-between">
                    <a href={`/blog/${post.title}`} class="text-xl font-semibold hover:underline">
                        <h2>{formatString(post.title)}</h2>
                    </a>

            <div class=" flex sm:bg-none p-1 bg-gray-800 rounded-lg" >




                    
                        <button type="button" class="hover:bg-gray-200  c rounded-lg" on:click|stopPropagation={() => copyHash(post.hash)} >
                <span class=" material-symbols-outlined">tag</span>

                        </button>
                        </div>




        </div>
        <p class="text-gray-600 text-sm">{formatTimestamp(post.date)}</p>
    </div>
{/each}
                       </section>
</div>
<style>
.post-box {
    border-radius: 20px;
    background: #f0f0f0;
    box-shadow: 10px 10px 20px grey; 
    border: 2px solid fuchsia; 
    animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes anime {
    0% {
         width: 20%; 
        height: 40px;       background: black;
        box-shadow: 5px 5px 10px grey; 
        opacity: 0.5;
    }
    100% {
        width: 100% ;
        height: 140px;
        background: black;
        box-shadow: 10px 10px 20px grey; 
    }
}
</style>

