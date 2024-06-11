<script lang="ts">
  //TODO! fix the annaimation on the banner
  import IntersectionObserver from "svelte-intersection-observer";
  let text = " My virtualazaiton stack.";
  let banner: HTMLElement;
</script>

<IntersectionObserver let:intersecting element={banner}>
  <div
    bind:this={banner}
    class="banner hidden sm:block w-full relative h-24 border border-transparent my-40"
  >
    {#if intersecting}
      <div class=" absolute top-0 left-0 h-full w-full"></div>
      <div class="content-container absolute top-0 left-0 text-white p-4">
        <div
          class="flex items-center flex-col sm:flex-row space-y-10 sm:space-y-0"
        >
          <p class="lg:text-6xl text-4xl font-bold font-mainFont">{text}</p>
          <img
            src="golang_official_logo_icon_169092.png"
            alt="GoLang Logo"
            class=" sm:w-1/4 ml-4"
          />
        </div>
      </div>
    {/if}
  </div>
</IntersectionObserver>

<style>
  .banner {
    position: relative;
  }

  .content-container {
    position: absolute;
    top: 0;
    animation: moveRight 3s forwards;
  }

  @keyframes moveRight {
    from {
      left: -1000px;
    }
    to {
      left: calc(30% - 200px);
    }
  }
</style>
