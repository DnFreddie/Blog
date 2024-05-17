<script>
import DescriptionSection from "./description_section.svelte";
import AnimatedProjects from "./animated_projects.svelte";
</script>
<div class="flex bg-gradient-to-b from-[#2d8b8e] via-[#3aab97] to-[#45cf69] py-14">
    <div class="lg:flex-row flex flex-col justify-evenly items-center space-y-20 py-20">
        <div class="flex justify-center items-center"> 
            <AnimatedProjects/>
        </div>
        <div class="flex justify-center items-center"> 
            <DescriptionSection img="svelte_logo.png" h="A bit about web projects"/>
        </div>
    </div>
</div>

