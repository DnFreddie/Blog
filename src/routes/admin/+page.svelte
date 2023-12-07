<script lang='ts'>

let fileInput;
let files;
let picture;
let pictureData;

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

<form method="post" action="?/uploadImage">
    <div class="layout-option-upload">
        <input type="hidden" bind:value={pictureData} name="pictureData" />
        <input  class="" id="pictureName" name="pictureName" type="file" accept=".md" bind:files  on:change={() => parseBase64(files[0])}/>
            <button type="submit">Upload</button>

        <div>
        </div>
    </div>
</form>


