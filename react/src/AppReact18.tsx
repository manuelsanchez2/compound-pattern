
import * as React from "react";
import { Card } from "./Card";

export default function App() {
  return (
    <div className="container">
      <Card variant="elevated">
        <Card.Header title="Project Aurora" subtitle="Next milestone: Beta" />
        <Card.Body>
          <p>
            Aurora is a greenfield initiative focused on streamlining content
            delivery. The next phase introduces role-based access and audit logs.
          </p>
          <ul style={{marginTop: '12px'}}>
            <li>RBAC scaffolding</li>
            <li>Telemetry dashboard</li>
            <li>Staging rollout plan</li>
          </ul>
        </Card.Body>
        <Card.Footer align="between">
          <span className="muted text-sm">Updated 2h ago</span>
          <div className="flex gap-2">
            <button className="btn">Details</button>
            <button className="btn primary">Launch</button>
          </div>
        </Card.Footer>
      </Card>

      <Card variant="outline">
        <Card.Header>
          <div className="flex gap-3" style={{alignItems:'center'}}>
            <img alt="" src="https://placehold.co/40" className="avatar" />
            <div>
              <h3 className="text-lg font-semibold">Manuel García</h3>
              <p className="muted text-sm">Frontend · Seville</p>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <p>
            Building accessible, internationalized apps. Currently exploring
            compound components and headless UI patterns.
          </p>
        </Card.Body>
        <Card.Footer align="end">
          <button className="btn">Message</button>
          <button className="btn primary">Follow</button>
        </Card.Footer>
      </Card>
    </div>
  );
}
