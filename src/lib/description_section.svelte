<script lang="ts">
  export let h: string = "Quick and Dirty with Python";
  export let img: string = "p_section_pyIcon.png";
  export let body = `I used Python at work primarily to work with datasets and clients
websites.
Mostly to gather data via scraping or cleaning product
information with the Pandas library. \n Implemented a couple of parsers
but nothing muchUsually use Python modules for fast remote
              connections, reverse shell, and etc. I'm familiar with the syntax
              and some useful tools.`;
</script>

<div class="flex flex-col text-white mx-2 md:w-1/2 sm:w-full">
  <div class="flex xl:justify-end">
    <img src="/{img}" class="w-[40%] rounded-full bg-transparent" alt="" />
  </div>
  <div class="flex flex-col space-y-6">
    <h2 class="font-bold font-mainFont text-2xl sm:text-4xl">
      {h}
    </h2>
    <p
      class="font-mainFont text-sm md:text-lg md:w-full lg:text-2xl tex-xl sm:w-full w-[90%] whitespace-normal"
    >
      {body}
    </p>
  </div>
</div>
