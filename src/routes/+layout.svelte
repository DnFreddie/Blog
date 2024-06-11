<script lang="ts">
  import "../app.css";
  import posthog from "posthog-js";
  import { browser } from "$app/environment";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import NavBar from "$lib/layout/navBar.svelte";
  import Footer from "$lib/layout/footer.svelte";

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
