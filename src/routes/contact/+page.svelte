<!-- Success Message Component -->
<script>
	export let form;
</script>
<div class="flex  bg-[#111827] text-white h-full flex-col overflow-hidden">
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
    <div class="container mx-auto p-6 bg-black rounded shadow-md mb-10">
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
        {#if form?.success}
        <div class="success-message">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <div class="success-text">Your message has been successfully sent!</div>
        </div>
        {/if}
    </div>
</div>

