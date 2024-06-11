<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer";
  type Slide = {
    title: string;
    subtitle: string;
    subtext: string;
  };

  const slides = ["Slide 1"];
  let test: HTMLElement;
</script>

<IntersectionObserver let:intersecting element={test}>
  <div class="flex items-center justify-center xl:p-40" bind:this={test}>
    <!-- Modified line -->
    <div
      class="flex justify-center {intersecting
        ? 'animate_content'
        : ''} sm:mx-8"
    >
      {#each slides as _}
        <a
          href="https://horseandnature.pl/"
          target="_blank"
          rel="noopener noreferrer"
          class=" album-item hover:animate_content flex"
        >
          <div class="">
            <span class="album-details">
              <span class="title">Click to </span>
              <span class="subtitle"> See</span>
              <span class="subtext bg-yellow-900 flex-row flex">
                Horseandnature
                <img src="/faviconHorse.png" alt="" />
              </span>
            </span>
          </div></a
        >
      {/each}
    </div>
  </div>
</IntersectionObserver>

<style>
  .album-details {
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    white-space: initial;
    float: left;
    box-sizing: border-box;
    color: white;
    height: 100%;
    font-size: 2.5rem;
    font-weight: 600;
    z-index: 99;
  }
  .title {
    font-weight: 900;
    display: inline-block;
    width: 100%;
  }
  .subtitle {
    font-weight: 100;
    line-height: 1.25rem;
  }
  .subtext {
    font-size: 1.1167rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1.25rem 1rem;
    width: 100%;
    white-space: initial;
    letter-spacing: 0;
    box-sizing: border-box;
    font-weight: 400;
  }
  .animate_content {
    animation: animate 2s ease;
  }

  .album-item {
    word-break: keep-all;
    background: #c2b280;
    width: 250px;
    -webkit-user-drag: none;
    height: 300px;
    user-select: none;
    border-radius: 10px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    margin: 0 3rem 0 0;
    transition: all 0.2s ease-out;
    transform: scale(1);
  }

  .album-item:hover {
    transform: scale(1.02);
  }

  @keyframes animate {
    0% {
      transform: scale(1, 0.002);
      opacity: 0;
    }
    15% {
      transform: scale(0.2, 0.002);
      opacity: 1;
    }
    50% {
      transform: scale(0.2, 0.002);
      opacity: 1;
    }
    65% {
      transform: scale(1, 0.002);
      opacity: 0;
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
</style>
