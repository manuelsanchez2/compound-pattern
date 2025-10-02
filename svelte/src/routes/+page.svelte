<script lang="ts">
  import * as Card from "$lib/components/card"
  // import * as Grid from "$lib/components/grid"
</script>

<div class="wrapper">
  <!-- <Grid.Root min="min-300" gap="lg" align="start"> -->
  <Card.Root aria-labelledby="sv5-header" variant="elevated" size="large">
    <Card.Header>
      <Card.Title id="sv5-header"
        >This is a compound card in Svelte 5</Card.Title
      >
    </Card.Header>
    <Card.Content>
      <Card.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        repellendus, labore natus, quod numquam consequuntur ad praesentium,
        distinctio iste at inventore eos? Nulla eveniet cum nemo pariatur quam
        magni maiores.
      </Card.Description>
      <form
        style="margin-top:12px; display:flex; flex-direction:column; gap:8px"
      >
        <input
          type="email"
          placeholder="Email"
          class="input"
          style="width:100%; box-sizing:border-box"
        />
        <input
          type="password"
          placeholder="Password"
          class="input"
          style="width:100%; box-sizing:border-box"
        />
      </form>
    </Card.Content>
    <Card.Footer>
      <button class="btn">Cancel</button>
      <button class="btn primary">Login</button>
    </Card.Footer>
  </Card.Root>

  <Card.Root aria-labelledby="sv5-header" variant="elevated" size="medium">
    <Card.Header>
      <Card.Title id="sv5-header"
        >This is a compound card in Svelte 5</Card.Title
      >
    </Card.Header>
    <Card.Content>
      <Card.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        repellendus, labore natus, quod numquam consequuntur ad praesentium,
        distinctio iste at inventore eos? Nulla eveniet cum nemo pariatur quam
        magni maiores.
      </Card.Description>
      <form
        style="margin-top:12px; display:flex; flex-direction:column; gap:8px"
      >
        <input
          type="email"
          placeholder="Email"
          class="input"
          style="width:100%; box-sizing:border-box"
        />
        <input
          type="password"
          placeholder="Password"
          class="input"
          style="width:100%; box-sizing:border-box"
        />
      </form>
    </Card.Content>
    <Card.Footer>
      <button class="btn">Cancel</button>
      <button class="btn primary">Login</button>
    </Card.Footer>
  </Card.Root>
  <!-- </Grid.Root> -->
</div>
