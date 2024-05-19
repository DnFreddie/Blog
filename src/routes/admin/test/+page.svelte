<script lang="ts">
  export let data 
  function formatString(str: string) {
    let formattedStr = str.replace(".md", "");

    formattedStr = formattedStr.replace(/_/g, " ");

    formattedStr = formattedStr
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedStr;
  }

</script>


<div class="niceone flex  bg-[#201C2C] justify-center w-full h-full ">
    <div class="flex my-12  ">

<div class="flex md:text-xl max-w-[1000px] text-white mx-2   text-xs text flex-col">

            <h1 class="text-4xl font-bold whitespace-normal py-4  text-[#b4befe] poemsBack">
                {formatString("The_gold_is_in_the_block")}
            </h1>
    {@html data.mRender}
    </div>

</div>
    </div>


<style>
.niceone {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        font-family: "Quicksand", sans-serif;

}


</style>
