
# SvelteKit Card (Svelte 5, baked-in header/footer slots)

This demo shows a compound Card with child components:

- `<Card.Root>` provides layout + named slots.
- `<Card.Header>` and `<Card.Footer>` **auto-assign** their target slot via an internal wrapper (`slot="header"/"slot="footer"`).
- `<Card.Header>` registers its heading `id` in context so the root can set `aria-labelledby`.

## Run
```bash
npm i
npm run dev
```
