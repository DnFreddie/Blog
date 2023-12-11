<script lang="ts">
import { setContext } from 'svelte'


 export let data

setContext('my-var', data.postst)
  import "../app.css";
  import NavBar from "$lib/navBar.svelte";
  import Footer from "$lib/footer.svelte";
</script>
    <NavBar/>

<slot />
<Footer/>
