
<script lang="ts">
  const { level = 3, title, subtitle, id = `card-${Math.random().toString(36).slice(2)}`, separated = true } =
    $props<{ level?: 1|2|3|4|5|6; title?: string; subtitle?: string; id?: string, separated?: boolean }>();
  import { getContext, onMount } from 'svelte';
  type Ctx = { registerLabel: (id: string) => void };
  const ctx = getContext<Ctx>('card-ctx');
  onMount(() => { if (ctx && id) ctx.registerLabel(id); });
  const tag = (`h${level}` as const);
</script>

<div class="header" class:borderBottom={separated}>
  {#if title}
    <svelte:element this={tag} id={id} class="title">{title}</svelte:element>
    {#if subtitle}<p class="subtitle">{subtitle}</p>{/if}
  {:else}
    <slot />
  {/if}
</div>

<style>.subtitle{ margin-top:4px; font-size:.875rem; color:var(--muted);
  } .header{ padding:1rem; padding-bottom:.75rem; } .title{ margin:0; font-size:1.25rem; font-weight:600; } .borderBottom{ border-bottom:1px solid var(--border);
}</style>
