
<script lang="ts">
  const { scrollY, padded = true } = $props<{ scrollY?: number; padded?: boolean }>();
</script>

<div class:padded style={scrollY ? `max-height:${scrollY}px; overflow:auto` : ''}>
  <slot />
</div>

<style>.padded{ padding:1rem; }</style>
