<script lang="ts">
import Drive from "./drive.svelte";
</script>


<div class="flex flex-col bg-gradient-to-b from-[#1d58a0] via-[#2692ab] to-[#2d8b8e] ">
    <Drive/>
    <div class="flex-grow flex flex-col md:flex-row-reverse md:mx-60 ">
        <div class="flex justify-center items-center  flex-col flex-grow px-7 pb-20 ">
            <div class="golangBanner bg-[#177578] sm:p-16 md:p-16 p-6 px-7 rounded-lg flex items-center justify-center ">
                <p class="font-bold text-white text-center text-lg">
                    I've been learning GoLang and Podman<br>
                    I'm looking for opportunities to work in cloud.</p>
            </div>
        </div>
        <img src="AwsPodman.png" alt="AwsCloud" class="md:w-[600px] md:h-[400px]"/>
    </div>
</div>


<style>
    @keyframes floatAnimation {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }

    .golangBanner {
        animation: floatAnimation 3s ease-in-out infinite;
    }
</style>
