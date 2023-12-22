<script lang="ts">
  import HamburgerMenu from "./hamburger-menu.svelte";
  import SearchBox from "./searchBox.svelte";
</script>
<div class="bg-[#885cd1]">
     <div class="flex justify-between items-center w-full px-4 py-5">
        <img src="/logo.ico" alt="Logo" class="h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-full">

        <img src="/signature.png" alt="Signature" class="overflow-hidden ">

        <div class="flex items-center">
            <HamburgerMenu/>
        </div>
    </div>
    <div class="flex justify-center">
        <SearchBox/>
    </div>
          </div>
