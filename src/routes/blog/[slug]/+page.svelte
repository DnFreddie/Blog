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
            <div class=" mb-9 md:mt-16 space-y-8 text-white   bg-black border-2 border-[#1e2836]  rounded-lg p-4 overflow-x-clip">
                <h1 class="text-4xl font-bold whitespace-normal text-purple-800 poemsBack">{formatString(data.title)}</h1>
                <div class="  whitespace-break-spaces  text-xl break-words  font-medium poemsBack">
                    {@html data.content }
                </div>
            </div>
        </div>
    </div>
</div>
    <style>
    .poemsBack {
        font-family: 'Quicksand', sans-serif;
    }


</style>
