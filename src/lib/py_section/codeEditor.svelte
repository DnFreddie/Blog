<script>
  import CoverEditor from "./coverEditor.svelte";
</script>

<div class=" sm:w-[85%] bg-gray-900 border-2 border-gray-500 rounded p-4 lg:w-[50%]">
  <div class="flex flex-col z-10 justify-between mt-11 sm:mx-8">
        <div class="inline  md:w-[50%] sm:mt-0 sm:mr-0  mt-10 mr-4 absolute lg:w-[45%] lg:mt-8 md:ml-24 xl:w-[35%] z-4">

    <CoverEditor />
        </div>


    <table class="text-white w-full text-2xl z-3">
      <tr>
        <td class="w-8">1</td>
        <td><code class="text-green-400">const xd = "5"</code></td>
      </tr>
      <!-- Repeat the structure for rows 2 to 7 -->
      <tr>
        <td class="w-8">2</td>
        <td> Lol = xd</td>
      </tr>
      <tr>
        <td class="w-8">3</td>
        <td> for i in range xd: xd = 9 + i</td>
      </tr>
      <tr>
        <td class="w-8">4</td>
        <td> for i in range xd: xd = 9 + i </td>
      </tr>
      <tr>
        <td class="w-8">5</td>
        <td> a + b = c + d </td>
      </tr>
      <tr>
        <td class="w-8">6</td>
        <td> @sadhjsh</td>
      </tr><tr>
        <td class="w-8">7</td>
        <td></td>
      </tr>
    </table>

    <div class="flex flex-row text-4xl mt-11 space-x-4">
      <span
        class="m bg-[#006CFE] p-4 rounded text-white font-extrabold material-symbols-outlined text-4xl"
        >play_arrow</span
      >
      <span
        class="material-symbols-outlined rounded p-4 text-white font-extrabold text-4xl bg-black"
        >replay</span
      >
    </div>
  </div>
</div>
