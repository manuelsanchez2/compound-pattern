
<script lang="ts">
  const { align = 'end', separated = true } = $props<{ align?: 'start'|'center'|'end'|'between'; separated?: boolean }>();
  const justify = align === 'start' ? 'flex-start' : align === 'center' ? 'center' : align === 'end' ? 'flex-end' : 'space-between';
</script>

<div class="footer" class:borderTop={separated} style={`justify-content:${justify}`}>
  <slot />
</div>

<style>
  .footer{ display:flex; gap:.5rem; padding:1rem; padding-top:.75rem; }
  .borderTop{ border-top:1px solid var(--border); }
</style>
