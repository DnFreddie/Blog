<script lang="ts">
  import FloatingBanner from "./floatingBanner.svelte";
  import CodeEditor from "./py_section/codeEditor.svelte";
</script>

<div class="bg-gradient-to-b from-[#3f0f4c] via-[#29148a] to-[#1d58a0]">
  <div class="flex">
    <div class="flex justify-center space-x-36 mt-11 xl:flex-row flex-col">
      <div class="flex xl:w-1/2 mx-16 xl:mx-0">
        <CodeEditor />
      </div>
      <div class="flex flex-col text-white mr-36 xl:w-[25%]">
        <img src="p_section_pyIcon.png" class="w-[25%]" alt="" />
        <div class="flex flex-col space-y-6">
          <h2 class="font-bold font-mainFont text-4xl">
            Quick and Dirty with Python
          </h2>
          <p class="font-mainFont text-2xl whitespace-normal">
            "I used Python at work primarily to work with datasets and clients'
            websites.
            <br />Mostly to gather data via scraping or cleaning product
            information with the Pandas library. Implemented a couple of parsers
            but nothing much. Usually use Python modules for fast remote
            connections, reverse shell, and etc. I'm familiar with the syntax
            and some useful tools."
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
