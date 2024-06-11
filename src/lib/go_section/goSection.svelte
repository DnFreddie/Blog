<script lang="ts">
  import DescriptionSection from "$lib/utils/description_section.svelte";
  import Drive from "./drive.svelte";
  const description = `
I'm utilizing containers for testing purposes and as small, easy VMs that I can later employ. I'm familiar with GitHub; I used it at work while developing pipelines. Currently, I'm striving to improve my Golang skills. I believe it will become my language of choice. It's nice and simple, which aligns well with my primary interests in system administration and APIs
`;
</script>

<div
  class="flex flex-col bg-gradient-to-b from-[#1d58a0] via-[#2692ab] to-[#2d8b8e]"
>
  <div class="flex flex-col mb-28">
    <Drive />
    <div class="flex flex-row justify-center items-center"></div>
    <div class="flex flex-row justify-center">
      <img
        src="/git_hub.png"
        class=" xl:w-[60%] 2xl:w-1/2 xl:block hidden"
        alt="github logo"
      />
      <div class="flex justify-center">
        <div class="flex justify-center items-center sm:px-0 pl-10 mr-5 px-4">
          <DescriptionSection
            h="Nice and simple"
            body={description}
            img="golan_docker.png"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes floatAnimation {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
</style>
