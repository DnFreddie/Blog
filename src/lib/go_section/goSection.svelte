<script lang="ts">
  import DescriptionSection from "$lib/utils/description_section.svelte";
  import Drive from "./drive.svelte";
  const description = `
I write Ansible playbooks for automation and deployment and use containers for integration testing. I'm currently working on improving my Golang skills, as I see it becoming my language of choice due to its simplicity, which aligns with my interests in system administration and APIs.
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
        src="/ansible-logo.png"
        class=" xl:w-[40%] 2xl:w-1/3 xl:block hidden"
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
