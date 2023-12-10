<script lang="ts">
  let showMenu = false;
  let menu: HTMLElement; 
function handleMenuClose() {
        showMenu = false
		console.log('close')
            window.removeEventListener('click', handleMenuClose);

	}
  function toggleMenu() {
    showMenu = !showMenu;
    }
 $: if (showMenu){
            window.addEventListener('click', handleMenuClose);

  }
</script>


<div role="toolbar" aria-orientation="horizontal" class="p-4 flex justify-between items-center md:bg-gray-800 rounded z-35">
    <div class="hidden md:flex space-x-4 ml-auto">
        <a href="/" class="text-white font-bold text-lg hover:bg-gray-699 px-4 py-2 rounded transition duration-300">Home</a>
        <a href="/blog" class="text-white font-bold text-lg hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Blog</a>
        <a href="/#footer" class="text-white font-bold text-lg hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Contact</a>
    </div>

    <button on:click|stopPropagation={toggleMenu} class="hamburger  md:hidden bg-black text-[#7833cc] rounded px-3 py-1 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white z-35">☰</button>
    
    <div bind:this={menu} style:transform={showMenu ? 'translateX(0)' : 'translateX(100%)'} class="hamburger-menu w-1/3 h-screen bg-gray-800 fixed top-0 right-0 transform translate-x-full overflow-y-auto md:hidden transition-transform duration-300 z-50">
        <a href="/" class="block text-white hover:bg-gray-700 px-3 py-1 rounded transition duration-300">Home</a>
        <a href="/blog" class="block text-white hover:bg-gray-700 px-3 py-1 rounded transition duration-300">Blog</a>
        <a href="#footer" class="block text-white hover:bg-gray-700 px-3 py-1 rounded transition duration-300">Contact</a>

    </div>
</div>


