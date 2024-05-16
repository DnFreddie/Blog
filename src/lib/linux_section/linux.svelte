<script>
  import Terminal from "$lib/terminal.svelte";
  import DescriptionSection from "$lib/description_section.svelte";
</script>

<div class="bg-gradient-to-b from-[#895cd1] via-[#2b125f] to-[#3f0f4c] flex">
  <div
    class="flex-col-reverse justify-between md:items-start space-x-0 2xl:mx-40 overflow-clip md:flex-row flex"
  >
    <DescriptionSection h="Linux and stability" img="linux_logo.png" />

    <Terminal />
  </div>
</div>
