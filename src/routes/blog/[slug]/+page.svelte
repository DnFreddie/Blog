<script lang="ts">
    	/** @type {import('./$types').PageData} */
    export let data
    
</script>
<div class="flex flex-col min-h-screen">
    <div class="bg-gradient-to-b from-[#895cd1] via-[#2b125f] to-[#3f0f4c] flex-grow ">
        <div class="flex justify-center items-center h-full md:mx-28 sm:mx-10">
            <div class=" mb-9 md:mt-16 text-white font-mono bg-black border-2 border-[#1e2836]  rounded-lg p-4 overflow-scroll">
                <h1 class="text-xl font-bold whitespace-normal text-purple-800">{data.title}</h1>
                <div class="list-item   whitespace-normal  break-words">
                    {@html data.content }
                </div>
            </div>
        </div>
    </div>
</div>
