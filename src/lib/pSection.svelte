<script lang="ts">
  import CodeEditor from "./py_section/codeEditor.svelte";
  import DescriptionSection from "./description_section.svelte";
</script>

<div
  class="bg-gradient-to-b from-[#3f0f4c] via-[#29148a] to-[#1d58a0] flex py-48"
>
  <div class="flex mt-24 mx-16">
    <div class="flex justify-center sm:space-x-36 xl:flex-row flex-col">
      <div class="flex xl:w-1/2 mx-2 sm:mx-16 mx- xl:mx-0">
        <CodeEditor />
      </div>
      <DescriptionSection />
    </div>
  </div>
</div>
