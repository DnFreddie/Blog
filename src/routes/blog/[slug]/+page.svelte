<script lang="ts">
    	/** @type {import('./$types').PageData} */
        function formatString(str:string) {
    let formattedStr = str.replace('.md', '');

    formattedStr = formattedStr.replace(/_/g, ' ');

    formattedStr = formattedStr.split(' ')
                               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                               .join(' ');

    return formattedStr;
}


    export let data
    
</script>
<div class="flex flex-col min-h-screen">
    <div class="bg-gradient-to-b from-[#895cd1] via-[#2b125f] to-[#3f0f4c] flex-grow ">
        <div class="flex justify-center items-center h-full md:mx-40 sm:mx-10 ">
            <div class=" mb-9 md:mt-16 space-y-8 text-white font-mono bg-black border-2 border-[#1e2836]  rounded-lg p-4 overflow-scroll">
                <h1 class="text-xl font-bold whitespace-normal text-purple-800">{formatString(data.title)}</h1>
                <div class="  whitespace-break-spaces  text-xl break-words font-sans font-medium">
                    {@html data.content }
                </div>
            </div>
        </div>
    </div>
</div>
