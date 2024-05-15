<script lang="ts">
  import { setContext } from "svelte";
  import "../app.css";
  import NavBar from "$lib/navBar.svelte";
  import Footer from "$lib/footer.svelte";
  import posthog from "posthog-js";
  import { browser } from "$app/environment";
  import { beforeNavigate, afterNavigate } from "$app/navigation";

  export let data;

  setContext("my-var", data.postst);

  if (browser) {
    beforeNavigate(() => posthog.capture("$pageleave"));
    afterNavigate(() => posthog.capture("$pageview"));
  }
</script>

<NavBar />

<div>
  <slot />
</div>
<Footer />
