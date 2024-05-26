<script>
  import Terminal from "$lib/terminal.svelte";
  import DescriptionSection from "$lib/description_section.svelte";
  const description = `I've been using Linux for 2 years, one year as my daily OS. Currently studying for CompTIA Linux+. I'm very familiar with the command line and CLI tools. Can write bash. I'm also knowledgeable about NixOS as it provided me with a great platform for testing
and managing configs`;
</script>

<div class="bg-gradient-to-b from-[#895cd1] via-[#2b125f] to-[#3f0f4c] flex">
  <div
    class="mt-20 flex-col-reverse xl:items-start items-center 2xl:mx-40 overflow-clip xl:flex-row flex"
  >
    <div class="flex flex-col text-white xl:w-[90%] pl-10 mr-5 sm:w-full">
      <DescriptionSection
        h="Linux and stability"
        body={description}
        img="linux_logo.png"
      />
    </div>
    <div class="flex px-6">
      <Terminal />
    </div>
  </div>
</div>
