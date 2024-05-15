<script lang="ts">
  import { page } from "$app/stores";
  import HamburgerMenu from "./hamburger-menu.svelte";
  import SearchBox from "./searchBox.svelte";
  let menu;
  let showMenu = false;
  let isClicker = false;
  const menuItems = ["blog", "poems", "contact"];
  const menuIcons = ["file_open", "book", "mail"];
  function toggleMenu() {
    showMenu = !showMenu;
    manageClickOutside();
  }

  function toggleSearch() {
    isClicker = !isClicker;
    manageClickOutside();
  }

  function manageClickOutside() {
    if (showMenu || isClicker) {
      window.addEventListener("click", handleClose);
    } else {
      window.removeEventListener("click", handleClose);
    }
  }

  function handleClose(event) {
    if (
      !event.target.closest(".hamburger-menu") &&
      !event.target.closest(".search-box")
    ) {
      showMenu = false;
      isClicker = false;
    }
  }
</script>

<div class="flex items-center justify-between bg-black xl:px-8 py-2">
  <div class="flex-1 flex justify-start ml-1">
    <a href="/" class="flex flex-row justify-center items-center">
      <img
        src="/newLogo.ico"
        alt="Logo"
        class="md:w-[250px] md:h-[100px] sm:w-[150px] sm:flex rounded-lg hidden"
      />
      <p class="text-white text-xl hidden xl:block font-mono">
        Definitely not what you think...
      </p>
    </a>
  </div>

  <div class="flex-1 justify-center flex">
    <button
      on:click|stopPropagation={toggleSearch}
      class="search-box bg-[#182233] border border-gray-300 rounded-2xl w-[300px] sm:w-[400px] py-2 flex items-center justify-start space-x-2"
    >
      <span class="material-symbols-outlined text-white"> search </span>
      <p class="text-gray-300">Search</p>
    </button>
  </div>

  <div class="flex-1 flex justify-end space-x-3 mr-4 navbar">
    <a
      href="/"
      class="lg:block hidden text-white hover:bg-gray-700 px-3 py-1 rounded transition duration-300 text-xl font-semibold
                {$page.url.pathname === '/'
        ? 'border-b-4 border-[#f53b57]'
        : ''}"
    >
      Home
    </a>
    {#each menuItems as item}
      <a
        href="/{item}"
        class="lg:block hidden text-white hover:bg-gray-700 px-3 py-1 rounded transition duration-300 text-xl font-semibold
  {$page.url.pathname.includes(item) ? 'border-b-4 border-[#f53b57]' : ''}"
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </a>
    {/each}
    <button
      on:click|stopPropagation={toggleMenu}
      class="hamburger-menu-button text-4xl sm:text-4xl hamburger lg:hidden bg-black text-[#7833cc] rounded px-3 py-1 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white z-35"
      >☰</button
    >
  </div>
</div>

<div
  bind:this={menu}
  class={`fixed top-0 right-0 w-1/3 sm:w-1/4 lg:hidden h-screen bg-gray-800 overflow-y-auto transform transition-transform ease-in-out duration-300 z-30 ${showMenu ? "translate-x-0" : "translate-x-full"}`}
>
  <div class="flex flex-col items-center w-full">
    <img src="/newLogo.png" alt="" />
    <a
      href="/"
      class={`flex items-center w-full text-white py-2 px-3 ${$page.url.pathname === "/" ? "border-y-2  border-red-500 bg-[#331233]" : ""}`}
    >
      <span class="material-symbols-outlined">home</span>
      <button class="flex-grow text-left ml-2">Home</button>
    </a>
    {#each menuItems as item, index}
      <a
        href="/{item}"
        class={`flex items-center w-full text-white py-2 px-3 ${$page.url.pathname.includes(item) ? "border-y-2  border-red-500 bg-[#331233]" : ""}`}
      >
        <span class="material-symbols-outlined">{menuIcons[index]}</span>
        <button class="flex-grow text-left ml-2"
          >{item.charAt(0).toUpperCase() + item.slice(1)}</button
        >
      </a>
    {/each}
  </div>
</div>
{#if isClicker}
  <SearchBox isOverlayVisible={true} />
{/if}

<style>
  .search-box {
    background-color: #182233;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    cursor: pointer;
  }

  .navbar a {
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 17px;
    width: 25%;
    text-align: center;
  }
</style>
