<script lang="ts">
  import { afterNavigate } from "$app/navigation"
  import { resolve } from "$app/paths"
  import { page } from "$app/state"
  let { children } = $props()
  import "../app.css"

  let pathname = $state(page.url.pathname)

  afterNavigate(() => {
    pathname = page.url.pathname
  })
</script>

<nav>
  <a href="/" class:active={pathname === "/"} class="btn">Svelte 5</a>
  <a href="/sv4" class:active={pathname === "/sv4"} class="btn">Svelte 4</a>
</nav>

{@render children()}

<style>
  nav {
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    padding: var(--spacing-lg);
  }

  nav a {
    text-decoration: none;
    padding: var(--spacing-sm) var(--spacing-md);
    transition: background 0.2s;
    color: black;
  }

  nav a:hover {
    background: var(--bg-hover);
  }

  nav a:focus {
    outline: 2px solid var(--primary);
  }

  nav a.active {
    font-weight: bold;
  }
</style>
