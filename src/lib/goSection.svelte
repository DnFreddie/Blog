<script lang="ts">
  import Drive from "./drive.svelte";
  import DescriptionSection from "./description_section.svelte";
</script>

<div
  class="flex flex-col bg-gradient-to-b from-[#1d58a0] via-[#2692ab] to-[#2d8b8e]"
>
    <div class="flex flex-col mb-28">

  <Drive />
  <div class="flex flex-row  justify-center items-center">
    </div>
    <div class="flex flex-row justify-center  ">
<img src="/git_hub.png" class=" xl:w-[60%] 2xl:w-1/2 xl:block hidden" alt="">
            <div class="flex justify-center">

<DescriptionSection img="golan_docker.png"/>
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
