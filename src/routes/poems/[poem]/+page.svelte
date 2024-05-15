<script lang="ts">
  export let data;
  let gradients: string[] = data.bacground;
  const color1 = gradients[0];
  const color2 = gradients[1];
  const color3 = gradients[2];
</script>

<div
  class="flex min-h-screen flex-col md:flex-row items-center justify-center p-4 md:pb-36 pt-10 bg-white shadow-xl overflow-hidden poemsBack -gradient-to-r"
  style="    background: linear-gradient(to right, {color1}, {color2}, {color3});;"
>
  <img
    src={data.img}
    class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 object-cover"
    alt="Poem Background"
  />
  <div
    class="w-full md:w-1/2 flex flex-col justify-center items-center space-y-4 p-4"
  >
    <p class="text-2xl font-bold text-white">
      {data.title.charAt(0).toUpperCase() +
        data.title.slice(1).replaceAll("-", " ")}
    </p>

    <div class="space-y-4">
      <p class="text-white whitespace-pre-line">
        {data.body.replaceAll("\\n", "\n").replaceAll("\\", "")}
      </p>
      <audio controls class="rounded-lg">
        <source src={data.music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</div>

<style>
  .poemsBack {
    font-family: "Quicksand", sans-serif;
  }
</style>
