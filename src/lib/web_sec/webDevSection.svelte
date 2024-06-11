<script>
  import DescriptionSection from "$lib/utils/description_section.svelte";
  import AnimatedProjects from "./animated_projects.svelte";
  const description = `I have some knowledge of JavaScript, although not as much as I'd prefer. At work, I've created small interfaces with it. SvelteKit is my framework of choice, and it's what I've used to build this blog. Additionally, I've completed another professional project using Svelte, a website dedicated to the Horses . While I can handle frontend development, it's not my favorite aspect of programming`;
</script>

<div
  class="flex bg-gradient-to-b from-[#2d8b8e] via-[#3aab97] to-[#45cf69] py-14"
>
  <div
    class="lg:flex-row flex flex-col justify-evenly items-center space-y-20 py-20"
  >
    <div class="flex justify-center items-center">
      <AnimatedProjects />
    </div>
    <div class="flex justify-center pl-10 mr-5 items-center">
      <DescriptionSection
        img="svelte_logo.png"
        h="A bit about web projects"
        body={description}
      />
    </div>
  </div>
</div>
