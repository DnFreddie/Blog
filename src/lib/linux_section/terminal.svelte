<script lang="ts">
  import Typewriter from "svelte-typewriter";
  import { onMount } from "svelte";

  let currentDateTime = new Date();

  onMount(() => {
    const interval = setInterval(() => {
      currentDateTime = new Date();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  function getCustomDateFormat(date: Date) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = String(date.getFullYear()).slice(-2);
    return `${hours}:${minutes} ${day}-${month}-${year}`;
  }
</script>

<div
  class="flex px-1 my-10 jetbrains-mono md:text-xl text-xs xl:text-2xl justify-center"
>
  <div class="flex flex-col items-center md:flex-row space-x-0 md:space-x-6">
    <div class="flex flex-col">
      <div
        class="w-full bg-gray-800 flex rounded-t-sm justify-between items-center px-6 py-2"
      >
        <div class="flex flex-row space-x-4">
          <div class="md:w-6 h-4 w-4 md:h-6 bg-red-500 rounded-full"></div>
          <div class="md:w-6 md:h-6 h-4 w-4 bg-yellow-400 rounded-full"></div>
          <div class="md:w-6 md:h-6 h-4 w-4 bg-green-500 rounded-full"></div>
        </div>
        <img
          src="nixso-logo.png"
          alt="nixos spinning logo"
          class="max-w-[10%] spin bg-transparent rounded-full"
        />
      </div>
      <div
        class="bg-black border flex-col justify-between border-gray-500 flex rounded-b-lg w-full shadow-2xl"
      >
        <div class="bg-black flex md:pb-80 pb-40 flex-col">
          <div class="flex flex-col mt-2 mx-2">
            <div class="flex flex-row">
              <p class="text-white">dnf</p>
              <p class="text-violet-500">[</p>
              <p class="text-[#78DDE9]">~/Env/Blog</p>
              <p class="text-violet-500">]</p>
              <p class="text-violet-500">(dev)</p>
            </div>
            <div class="flex-row flex">
              <p class="text-[#6E5092]">└─</p>
              <p class="text-[#FED867]">$</p>
              <Typewriter
                mode="loop"
                --cursor-color="#78DDE9"
                cursor={true}
                delay={2000}
                wordInterval={3000}
                unwriteInterval={50}
                interval={50}
              >
                <p class=" absolute text-white whitespace-break-spaces">
                  tmux my window manager
                </p>
                <p class="text-white">#vimuser</p>
                <p class="text-white">{"bash == better zsh "}</p>
              </Typewriter>
            </div>
          </div>
        </div>
        <div
          class="flex bg-[#90A858] md:text-lg sm:text-sm text-xs flex-row justify-between px-4"
        >
          <p class=" ">0:bash*</p>
          <p class=" ">"dnf@rocky:~" {getCustomDateFormat(currentDateTime)}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .jetbrains-mono {
    font-family: "JetBrains Mono", monospace;
    font-optical-sizing: auto;
    font-style: normal;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .spin {
    animation: spin 20s linear infinite;
  }

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
  }
</style>
