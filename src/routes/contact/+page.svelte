<script>
	export let form;
</script>
<div class="flex  bg-[#111827] text-white  flex-col overflow-hidden">
    <div class="flex flex-col flex-grow space-y-8 mt-14 justify-start ml-12">
        <h3 class="md:text-3xl text-2xl font-mono">Any questions or interests?</h3>
        <div class="flex flex-col">
            <p>Contact me directly</p>
            <div>
                <p>defnotfreddie@gmail.com</p>
            </div>
        </div>
        <div class="flex space-x-6 py-11 flex-row">
            <img src="/icons8-github-48.png" alt="Instagram">
            <img src="/icons8-linkedin-48.png" alt="Twitter">
        </div>
    </div>
      {#if form?.success}
        <div class="success-message my-4">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <div class="success-text">Your message has been successfully sent!</div>
        </div>
        {/if}
      {#if ! form?.success}
    <div class="container  mx-auto p-6 bg-black rounded shadow-md mb-10">

        <form method="POST" action="?/startNewssletter" class="space-y-3">
            <div class="text-white">
                <label for="name" class="block text-sm font-medium italic">Name</label>
                <input value="{form?.data?.name ?? ''}" type="text" id="name" name="name" class="block w-full mt-1 border-b border-gray-300 bg-gray-500 focus:ring-0 focus:border-black">
                {#if form?.errors?.name}
                <span class="text-red-800">{form.errors.name[0]}</span>
                {/if}
            </div>
            <div>
                <label for="email" class="block text-sm font-medium italic">E-mail</label>
                <input value="{form?.data?.email ?? ''}" type="email" id="email" name="email" class="block w-full mt-1 border-b border-gray-300 bg-gray-500 focus:ring-0 focus:border-black">
                {#if form?.errors?.email}
                <span class="text-red-800">{form.errors.email[0]}</span>
                {/if}
            </div>
            <div>
                <label for="message" class="block text-sm font-medium italic">Your message</label>
                <textarea value="{form?.data?.message ?? ''}" id="message" name="message" rows="4" class="block w-full mt-1 border-b border-gray-300 bg-gray-500 focus:ring-0 focus:border-black"></textarea>
                {#if form?.errors?.message}
                <span class="text-red-800">{form.errors.message[0]}</span>
                {/if}
            </div>
            <div class="flex justify-end">
                <button type="submit" class="px-6 py-2 text-sm font-medium text-white hover:bg-[#f53b57] border rounded-md border-transparent bg-purple-800 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 transition disabled:opacity-25">Send</button>
            </div>
        </form>
  
    </div>
        {/if}
</div>


<style>
    .success-message {
    display: flex;
    align-items: center;
    background-color: #e6ffed;
    border: 1px solid #b6e6bd;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
}

.checkmark {
    width: 26px;
    height: 26px;
    margin-right: 10px;
}

.checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #66bb6a;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    stroke-width: 2;
    stroke: #66bb6a;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards;
}

.success-text {
    color: #3c763d;
    font-size: 16px;
    font-weight: 500;
}

@keyframes stroke {
    100% {
        stroke-dashoffset: 0;
    }
}

</style>
