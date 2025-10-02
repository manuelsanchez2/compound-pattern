// Card.tsx — React 19 (refs as props), TypeScript, a11y-ready

import * as React from "react"

/** Small class combiner */
type ClassValue = string | false | null | undefined
function cx(...parts: ClassValue[]) {
  return parts.filter(Boolean).join(" ")
}

type Align = "start" | "center" | "end" | "between"

type PrivateWiring = {
  /** internal: id of the title element used for aria-labelledby */
  __cardTitleId?: string
  /** internal: setter to register the labelledby id on the root */
  __setCardLabelledBy?: (id: string) => void
}

/** Context value (public in case you want to expand later) */
type CardContextValue = {
  labelledById?: string
}

const CardContext = React.createContext<CardContextValue | null>(null)

/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/

/**
 * Props for the Card root.
 *
 * @remarks
 * - Accepts a `ref` prop (React 19 style).
 * - Automatically wires `aria-labelledby` when a `Card.Header` is present.
 */
export type CardProps = React.HTMLAttributes<HTMLElement> & {
  /** Visual variant of the card */
  variant?: "default" | "elevated" | "outline"
  /** Optional tabIndex for keyboard focus */
  tabIndexOnWrapper?: number
  /** React 19: ref is a normal prop */
  ref?: React.Ref<HTMLElement>
}

/**
 * Root element of the Card compound component.
 * Exposes a declarative API via `<Card.Header/>`, `<Card.Body/>`, `<Card.Footer/>`.
 */
function CardRoot({
  className,
  children,
  variant = "default",
  tabIndexOnWrapper = 0,
  ref,
  ...rest
}: CardProps) {
  // id for the title node; injected into Card.Header
  const titleId = React.useId()

  // labelledby id actually set by the header once it knows its final id
  const [labelledById, setLabelledById] = React.useState<string | undefined>()

  const ctx = React.useMemo<CardContextValue>(
    () => ({ labelledById }),
    [labelledById]
  )

  return (
    <CardContext.Provider value={ctx}>
      <article
        ref={ref}
        aria-labelledby={labelledById}
        tabIndex={tabIndexOnWrapper}
        className={cx(
          "card",
          variant === "elevated" && "elevated",
          variant === "outline" && "outline",
          className
        )}
        {...rest}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child
          // inject internal wiring props to every direct child (safe no-op for non-Header nodes)
          return React.cloneElement(
            child as any,
            {
              __cardTitleId: titleId,
              __setCardLabelledBy: (id: string) => setLabelledById(id),
            } as PrivateWiring
          )
        })}
      </article>
    </CardContext.Provider>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Header
 * -----------------------------------------------------------------------------------------------*/

/**
 * Props for the Card header.
 *
 * @remarks
 * - If `title` is provided, we render a heading and register its id with the root for a11y.
 * - If `title` is omitted, children render as-is and you can include your own heading (be sure to add an id).
 */
export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> &
  PrivateWiring & {
    /** Heading level to use when `title` is provided */
    level?: 1 | 2 | 3 | 4 | 5 | 6
    /** Optional title content; when provided a heading with id is rendered */
    title?: React.ReactNode
    /** Optional subtitle paragraph under the title */
    subtitle?: React.ReactNode
    /** React 19: ref is a normal prop */
    ref?: React.Ref<HTMLDivElement>
  }

/**
 * Header region of the card.
 */
function CardHeader({
  className,
  title,
  subtitle,
  level = 3,
  children,
  __cardTitleId,
  __setCardLabelledBy,
  ref,
  ...rest
}: CardHeaderProps) {
  const Heading = `h${level}` as unknown as React.ElementType

  React.useEffect(() => {
    if (__cardTitleId && __setCardLabelledBy) {
      __setCardLabelledBy(__cardTitleId)
    }
  }, [__cardTitleId, __setCardLabelledBy])

  return (
    <div ref={ref} className={cx("p-4 pb-0", className)} {...rest}>
      {title ? (
        <>
          <Heading id={__cardTitleId} className="text-lg font-semibold">
            {title}
          </Heading>
          {subtitle && (
            <p className="muted text-sm" style={{ marginTop: 4 }}>
              {subtitle}
            </p>
          )}
        </>
      ) : (
        children
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Body
 * -----------------------------------------------------------------------------------------------*/

/**
 * Props for the Card body content region.
 */
export type CardBodyProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Optional y-axis scroll height; adds `max-height` with scroll */
  scrollY?: number
  /** Whether to include default padding */
  padded?: boolean
  /** React 19: ref is a normal prop */
  ref?: React.Ref<HTMLDivElement>
}

/**
 * Body/content region of the card.
 */
function CardBody({
  className,
  scrollY,
  padded = true,
  ref,
  ...rest
}: CardBodyProps) {
  return (
    <div
      ref={ref}
      className={cx(padded && "p-4", className)}
      style={
        scrollY
          ? ({
              maxHeight: `${scrollY}px`,
              overflowY: "auto",
            } as React.CSSProperties)
          : undefined
      }
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Footer
 * -----------------------------------------------------------------------------------------------*/

/**
 * Props for the Card footer region.
 */
export type CardFooterProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Horizontal alignment of footer content */
  align?: Align
  /** Whether to render a separating top border */
  separated?: boolean
  /** React 19: ref is a normal prop */
  ref?: React.Ref<HTMLDivElement>
}

const alignToClass: Record<Align, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
}

/**
 * Footer/action bar region of the card.
 */
function CardFooter({
  className,
  align = "end",
  separated = true,
  ref,
  ...rest
}: CardFooterProps) {
  return (
    <div
      ref={ref}
      className={cx(
        "p-4 pt-3 flex gap-2",
        alignToClass[align],
        separated && "border-top",
        className
      )}
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Namespaced export
 * -----------------------------------------------------------------------------------------------*/

/**
 * Compound Components export.
 *
 * @example
 * <Card variant="elevated" ref={ref}>
 *   <Card.Header title="Project Aurora" subtitle="Next milestone: Beta" />
 *   <Card.Body>…</Card.Body>
 *   <Card.Footer align="between">…</Card.Footer>
 * </Card>
 */
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})
