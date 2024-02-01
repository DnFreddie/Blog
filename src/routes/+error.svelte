
<script lang="ts">

    import {page} from '$app/stores'


    

</script>

 <div  class="  bg-i flex pt-44 flex-col justify-start items-center h-screen bg-gray-800 text-white">
    {#if $page.status==404}
        <h1 class="text-6xl font-bold mb-4">
            You Must Be Lost
        </h1>
        <a href="/" class="text-lg text-blue-300 hover:text-blue-400">
            Go Home
        </a>
        
    {:else}
        <h1 class="text-4xl font-bold mb-4">
            Whoops, We Weren't Expecting That
        </h1>
        <p class="text-lg">We are investigating the issue</p>
    {/if}

    {#if $page.error?.message }
        <p class="absolute bottom-5 text-red-400 text-sm">
            Error: {$page.error.message}
        </p>
    {/if}
</div>
