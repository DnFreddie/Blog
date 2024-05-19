<script lang="ts">
  function backToTop() {
    // Smooth scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<footer class="bg-[#002a41] flex w-full p-4 text-xs" id="footer">
  <div class="flex items-center justify-between w-full gap-24 sm:gap-0">
    <div class="flex gap-12">
      <img
        src="/favicon.png"
        alt="Logo"
        class="h-16 w-20 hidden md:flex rounded-lg"
      />
      <div class="flex flex-col items-start space-y-2">
        <span class="font-bold text-white">DefnotFreddie</span>
        <a
          href="mailto:defnotfreddie@gmail.com"
          class="hover:text-violet-500 transition duration-300"
        >
          <span class="text-gray-400">defnotfreddie@gmail.com</span>
        </a>
      </div>
    </div>

    <div
      class="bg-violet-800 hidden sm:flex rounded shadow-lg hover:bg-violet-700 active:bg-violet-900 transition-all duration-200"
    ></div>
    <div class="flex items-center space-x-4">
      <a
        href="https://www.linkedin.com/in/fryderyk-%C5%82ysiak-b49426254/"
        target="_blank"
        class="inline-block p-0"
      >
        <img
          src="/icons8-linkedin-64.png"
          class="social-logo m-auto"
          loading="lazy"
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://github.com/DnFreddie"
        target="_blank"
        class="inline-block p-0"
      >
        <img
          src="/icons8-github-64.png"
          class="social-logo m-auto"
          loading="lazy"
          alt="GitHub"
        />
      </a>
    </div>
  </div>
</footer>
