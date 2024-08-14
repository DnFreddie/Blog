<script lang="ts">
  import DescriptionSection from "$lib/utils/description_section.svelte";
  import Terminal from "./terminal.svelte";

  const description = `I have been using Linux for two years as my primary operating system. 
I hold the CompTIA Linux+ certification and am well-versed in command line interfaces and CLI tools. Additionally, I have experience writing Bash scripts. Currently, I use Rocky Linux as my distro.`;
</script>

<div class="bg-gradient-to-b from-[#895cd1] via-[#2b125f] to-[#3f0f4c] flex">
  <div
    class="mt-20 flex-col-reverse xl:items-start items-center 2xl:mx-40 overflow-clip xl:flex-row flex"
  >
    <div class="flex flex-col text-white xl:w-[90%] pl-10 mr-5 sm:w-full">
      <DescriptionSection
        h="Linux and stability"
        body={description}
        img="linuxplus-logo.png"
      />
    </div>
    <div class="flex px-6">
      <Terminal />
    </div>
  </div>
</div>
