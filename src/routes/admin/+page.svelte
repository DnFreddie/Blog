<script lang='ts'>


/** @type {import('./$types').PageData} */
export let data;
	/** @type {import('./$types').ActionData} */
export let form;
let logged = false
let files;
let picture;
let pictureData;
$:if (form?.success) {
    logged = true;
}


function parseBase64(image){
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = e => {
        picture = e.target?.result;
        const data = picture.split(',');
        pictureData = data[1];
    }
}

</script>
{#if !logged}
            <div class="min-h-screen flex items-start justify-center bg-gradient-to-b from-purple-600 via-purple-800 to-purple-900 pt-8">

        <form method="POST" action="?/login" class="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
            <div>
                <label for="email" class="block text-lg font-semibold text-gray-700">Email</label>
                <input id="email" name="email" type="email" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>

            <div>
                <label for="password" class="block text-lg font-semibold text-gray-700">Password</label>
                <input id="password" name="password" type="password" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>

            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2  font-bold focus:ring-offset-2 focus:ring-indigo-500">Log in</button>
        </form>
    </div>
{/if}

{#if form?.success}
    <div class="flex flex-col min-h-screen justify-center bg-gradient-to-b from-purple-600 via-purple-800 to-purple-900">

        <p class="text-center text-xl font-semibold text-green-500">Successfully logged in! Welcome back.</p>

        <form method="post" action="?/uploadImage" class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
            <div class="flex flex-col items-center space-y-4">
                <input type="hidden" bind:value={pictureData} name="pictureData" />
                <div class="w-full">
                    <label for="pictureName" class="block text-gray-700 text-lg font-bold mb-2">Choose File</label>
                    <input id="pictureName" name="pictureName" type="file" accept=".md" bind:files on:change={() => parseBase64(files[0])} class="form-input block w-full text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                </div>
                <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Upload</button>
            </div>
        </form>
    </div>
{/if}

