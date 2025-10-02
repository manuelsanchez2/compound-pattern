import * as React from "react"
import { Card } from "./Card19"

export default function Demo() {
  const rootRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    rootRef.current?.focus()
  }, [])

  return (
    <div className="container">
      <Card ref={rootRef} variant="elevated" tabIndexOnWrapper={0}>
        <Card.Header title="Project Aurora" subtitle="Next milestone: Beta" />
        <Card.Body>
          <p>
            Aurora streamlines content delivery. RBAC + audit logs are next.
          </p>
        </Card.Body>
        <Card.Footer align="between">
          <span className="muted text-sm">Updated 2h ago</span>
          <div className="flex gap-2">
            <button className="btn">Details</button>
            <button className="btn primary">Launch</button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}
