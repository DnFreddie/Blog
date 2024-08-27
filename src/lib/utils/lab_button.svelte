
<script charset="utf-8" lang="ts">
 
export let labUrl:string

</script>

<style>
  @keyframes jingle {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  }

  .jingle {
    animation: jingle 2s ease-in-out infinite;
  }
</style>

<div class="flex flex-col items-center">
  <div class="rounded-full justify-center bg-black  px-4 py-3 jingle hover:bg-purple-800 transform hover:scale-110 transition-all duration-300">
            <a target="_blank" rel="noopener noreferrer" href="{labUrl}">

      <span class="material-symbols-outlined text-white">
        science
      </span>
      </a>
  </div>
  <span class="text-white hidden md:block mt-2">Lab Available</span>
</div>
