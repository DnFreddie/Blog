<script lang="ts">
  import CodeEditor from "./py_section/codeEditor.svelte";
  import DescriptionSection from "./description_section.svelte";
</script>

<div
  class=" bg-gradient-to-b from-[#3f0f4c] via-[#29148a] to-[#1d58a0] overflow-clip flex py-48"
>
<div class="flex xl:flex-row flex-col xl:px-8 items-center space-y-4 xl:space-x-20 justify-center ">


        <CodeEditor />


        <div class="flex justify-center pl-10  px-10 items-center"> 
      <DescriptionSection />
        </div>
    </div>
</div>
