<script>
  import NewsletterSignup from "./NewsletterSignup.svelte";
  import OpenNewWindow from "iconoir/icons/open-new-window.svg?component";

  import RssFeed from "iconoir/icons/rss-feed.svg?component";
  import Youtube from "iconoir/icons/youtube.svg?component";
  import Twitter from "iconoir/icons/twitter.svg?component";
  import Linkedin from "iconoir/icons/linkedin.svg?component";
  import Github from "iconoir/icons/github.svg?component";
  import Discord from "iconoir/icons/discord.svg?component";

  const year = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { name: "Product", path: "/product" },
    { name: "Solutions", path: "/solutions" },
    { name: "Community", path: "/community" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    {
      name: "Docs",
      path: "https://docs.mathesar.org/latest/",
      isExternal: true,
    },
    { name: "Donate", path: "/donate" },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "YouTube",
      path: "https://www.youtube.com/@mathesar_org",
      icon: Youtube,
    },
    {
      name: "Twitter",
      path: "https://twitter.com/mathesar_org",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/company/mathesar-foundation/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      path: "https://github.com/mathesar-foundation/mathesar",
      icon: Github,
    },
    {
      name: "Discord",
      path: "https://discord.gg/enaKqGn5xx",
      icon: Discord,
    },
    {
      name: "Bluesky",
      path: "https://bsky.app/profile/mathesar-org.bsky.social",
      svg: `
        <svg
              class="w-6 h-6"
              viewBox="0 0 600 530"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
              />
        </svg>
      `,
    },
    {
      name: "Reddit",
      path: "https://www.reddit.com/r/mathesar_org/",
      svg: `
        <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0526 7.8154L11.8042 4.27941C12.0339 3.19898 13.0959 2.50929 14.1764 2.73894L17.3725 3.4183C17.8351 2.90546 18.5509 2.64644 19.275 2.80035C20.3554 3.03 21.0451 4.09204 20.8155 5.17247C20.5858 6.2529 19.5238 6.94259 18.4434 6.71294C17.7193 6.55903 17.1707 6.03124 16.9567 5.3746L13.7605 4.69523L13.0943 7.82978C14.8789 7.96683 16.6522 8.56079 18.2581 9.52961C19.0892 9.06763 20.0992 8.99337 21.007 9.36091C22.1731 9.833 22.9531 10.9459 22.9991 12.2031L22.9996 12.2241C23.0151 13.2277 22.559 14.1657 21.792 14.7742C21.7899 14.8178 21.7871 14.859 21.7836 14.8971C21.7836 18.8949 17.3341 21.9267 11.9852 21.9267C6.65232 21.9267 2.27693 18.9027 2.27987 14.9738C2.27523 14.9134 2.27162 14.853 2.26905 14.7926C1.46701 14.1873 0.984722 13.2277 1.00037 12.1962C1.01955 10.9317 1.78341 9.79777 2.94804 9.30491C3.85909 8.91936 4.881 8.98299 5.72371 9.44381C7.3578 8.46653 9.15777 7.91241 11.0526 7.8154ZM20.3385 13.341C20.7466 13.1382 21.003 12.7207 21.0001 12.2656C20.9789 11.8005 20.6887 11.3897 20.2565 11.2147C19.821 11.0384 19.3226 11.1343 18.9837 11.4597L18.3991 12.0207L17.729 11.5652C16.1137 10.4672 14.2771 9.8397 12.4995 9.80134L11.493 9.80123C9.61791 9.8295 7.84136 10.4002 6.25552 11.4757L5.59246 11.9254L5.00897 11.3764C4.66501 11.0528 4.16243 10.9627 3.7275 11.1468C3.29257 11.3308 3.0073 11.7543 3 12.2265C2.99298 12.6987 3.26526 13.1307 3.69441 13.3278L4.32738 13.6186L4.27399 14.3132C4.261 14.482 4.261 14.6516 4.27693 14.8971C4.27693 17.6071 7.63313 19.9267 11.9852 19.9267C16.3561 19.9267 19.7836 17.5913 19.7865 14.8205C19.7995 14.6516 19.7995 14.482 19.7865 14.3132L19.7348 13.6411L20.3385 13.341ZM6.95075 13.4999C6.95075 12.6715 7.62232 11.9999 8.45075 11.9999C9.27918 11.9999 9.95075 12.6715 9.95075 13.4999C9.95075 14.3283 9.27918 14.9999 8.45075 14.9999C8.05292 14.9999 7.67139 14.8419 7.39009 14.5606C7.10878 14.2793 6.95075 13.8977 6.95075 13.4999ZM13.9507 13.4999C13.9507 12.6715 14.6223 11.9999 15.4507 11.9999C16.2792 11.9999 16.9507 12.6715 16.9507 13.4999C16.9507 14.3283 16.2792 14.9999 15.4507 14.9999C15.0529 14.9999 14.6714 14.8419 14.3901 14.5606C14.1088 14.2793 13.9507 13.8977 13.9507 13.4999ZM11.9665 18.6028C10.5693 18.6028 9.19993 18.2329 8.08503 17.3928C7.94659 17.2241 7.95868 16.9779 8.11299 16.8236C8.2673 16.6693 8.51349 16.6572 8.68218 16.7956C9.62697 17.4886 10.805 17.7856 11.9507 17.7856C13.0965 17.7856 14.2813 17.5112 15.235 16.8271C15.3473 16.7176 15.5095 16.6763 15.6604 16.7188C15.8114 16.7613 15.9282 16.8811 15.9669 17.0331C16.0055 17.1851 15.9517 17.3346 15.8479 17.4556C15.1638 18.2531 13.3636 18.6028 11.9665 18.6028Z"
              />
        </svg>
      `,
    },
  ];
</script>

<footer class="py-24 bg-stormy-950 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Logo and Navigation Links -->
      <div class="space-y-8">
        <a href="/" aria-label="Mathesar Homepage">
          <enhanced:img
            src="/src/assets/logo.png"
            alt="Mathesar"
            class="h-9 w-auto"
          />
        </a>
        <nav class="flex flex-col gap-4">
          {#each navLinks as { name, path, isExternal }}
            <a
              href={path}
              class="text-white hover:text-salmon-500 transition-colors duration-300 flex items-center gap-1"
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {name}
              {#if isExternal}
                <OpenNewWindow class="w-3" />
              {/if}
            </a>
          {/each}
        </nav>
      </div>

      <!-- Contact Section -->
      <div class="space-y-6">
        <h3 class="text-xl text-pumpkin-500 font-medium">Contact Us</h3>
        <p class="text-stormy-200">
          To reach out to the Mathesar team, send us an email at
          <a
            href="mailto:hello@mathesar.org"
            class="text-white hover:text-salmon-500 transition-colors duration-300"
          >
            hello@mathesar.org
          </a>.
        </p>

        <div class="mt-8">
          <h4 class="text-lg text-pumpkin-500 font-medium mb-4">Find us on</h4>
          <div class="grid grid-cols-2 gap-4">
            {#each socialLinks as { name, path, icon, svg }}
              <a
                href={path}
                class="flex items-center gap-2 text-white hover:text-salmon-500 transition-colors duration-300"
                aria-label={name}
              >
                {#if icon}
                  <svelte:component this={icon} class="w-6" />
                {:else if svg}
                  {@html svg}
                {/if}
                <span>{name}</span>
              </a>
            {/each}
          </div>
        </div>
      </div>

      <!-- Subscription Section -->
      <div class="space-y-6">
        <h3 class="text-xl text-pumpkin-500 font-medium">
          Keep on top of what's going on at the Mathesar Foundation
        </h3>
        <NewsletterSignup />

        <!-- Survey CTA Section -->
        <div class="mt-8 space-y-2 p-4 rounded-lg bg-stormy-100">
          <h3 class="text-lg text-stormy-800 font-medium">
            Help shape Mathesar!
          </h3>
          <p class="text-sm text-stormy-800">
            Share your thoughts in our quick survey:
          </p>
          <a
            href="/survey"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full block text-center bg-plum-300/20 text-plum-800 border-2 border-plum-500 hover:bg-plum-400/20 px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-1"
          >
            Take the Survey
            <OpenNewWindow class="w-3" />
          </a>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div
        class="lg:mt-16 flex flex-col sm:flex-row justify-between items-center gap-6 lg:col-span-3"
      >
        <p class="text-plum-200 order-2 md:order-1">
          Mathesar Foundation © {year}. All rights reserved.
        </p>
        <div
          class="flex flex-col md:flex-row items-start w-full md:w-auto md:items-center gap-4 lg:gap-8"
        >
          <a
            href="/privacy"
            class="text-white hover:text-salmon-500 transition-colors duration-300"
          >
            Privacy&nbsp;Policy
          </a>
          <a
            href="/mailing-list"
            class="text-white hover:text-salmon-500 transition-colors duration-300"
          >
            Mailing&nbsp;List
          </a>
          <a
            href="/contact"
            class="text-white hover:text-salmon-500 transition-colors duration-300"
          >
            Contact Us
          </a>
          <a
            aria-label="RSS Feed"
            href={"/feed.xml"}
            class="flex items-center gap-2 text-white hover:text-salmon-500 transition-colors duration-300"
          >
            <RssFeed class={"w-6"} />
            <span>RSS</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
