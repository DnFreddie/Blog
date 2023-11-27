<script lang="ts">
    import { onMount } from 'svelte';
    export let color = "bg-[#331233]";
    export let htmlContent = "I've learned Linux for 2 years.<br><br>Never got enough of it.";

    let banner;

    onMount(() => {
        createFloatingBanner();
    });

    function createFloatingBanner() {
        if (!banner) {
            console.error("Banner element not found.");
            return;
        }

        let startTime = null;

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;

            const offsetY = Math.sin(timeElapsed / 1200) * 50;
            banner.style.transform = `translateY(${offsetY}px)`;

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }
</script>


<div bind:this={banner} id="floatingBanner" class="  {color} text-white p-8 rounded-lg transform translate-y-12  w-[300px] h-[150px] ">
    <p class="font-bold" contenteditable bind:innerHTML={htmlContent}>
    </p>
</div>

