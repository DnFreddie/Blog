<script lang="ts">
  import CodeEditor from "./py_section/codeEditor.svelte";
  import DescriptionSection from "./description_section.svelte";
</script>

<div
  class=" bg-gradient-to-b from-[#3f0f4c] via-[#29148a] to-[#1d58a0] overflow-clip flex py-48"
>
<div class="flex xl:flex-row flex-col xl:px-8  xl:space-x-20 justify-center px-2">

        <CodeEditor />


      <DescriptionSection />
    </div>
</div>
