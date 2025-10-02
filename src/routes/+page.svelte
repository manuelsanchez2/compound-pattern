<script lang="ts">
  import * as Card from '$lib/card';
</script>


<div class="container">
  <Card.Root variant="elevated">
    <Card.Header separated={false} slot="header" title="Project Aurora" subtitle="Next milestone: Beta" />
    <Card.Body>
      <p>Aurora streamlines content delivery. RBAC + audit logs are next.</p>
      <ul style="margin-top:12px">
        <li>RBAC scaffolding</li>
        <li>Telemetry dashboard</li>
        <li>Staging rollout plan</li>
      </ul>
    </Card.Body>
    <Card.Footer separated={false} slot="footer" align="between">
      <span class="muted small">Updated 2h ago</span>
      <div style="display:flex; gap:.5rem">
        <button class="btn">Details</button>
        <button class="btn primary">Launch</button>
      </div>
    </Card.Footer>
  </Card.Root>

  <Card.Root variant="outline">
    <Card.Header slot="header">
      <div class="row">
        <img class="avatar" alt="" src="https://placehold.co/40" />
        <div>
          <h3 style="margin: 0; padding: 0;" class="title" id="profile">Manuel García</h3>
          <p class="muted small">Frontend · Seville</p>
        </div>
      </div>
    </Card.Header>
    <Card.Body>
      <p>Building accessible, internationalized apps. Exploring Svelte 5 runes.</p>
    </Card.Body>
    <Card.Footer slot="footer" align="end">
      <button class="btn">Message</button>
      <button class="btn primary">Follow</button>
    </Card.Footer>
  </Card.Root>
</div>
