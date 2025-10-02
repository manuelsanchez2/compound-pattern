import * as React from "react"

type ClassValue = string | undefined | false
function cx(...parts: ClassValue[]) {
  return parts.filter(Boolean).join(" ")
}

type Align = "start" | "center" | "end" | "between"

type CardContextValue = {
  labelledById?: string
}

const CardContext = React.createContext<CardContextValue | null>(null)

export type CardProps = React.HTMLAttributes<HTMLElement> & {
  variant?: "default" | "elevated" | "outline"
  tabIndexOnWrapper?: number
}

const CardRoot = React.forwardRef<HTMLElement, CardProps>(function Card(
  { className, children, variant = "default", tabIndexOnWrapper = 0, ...rest },
  ref
) {
  const titleId = React.useId()
  const [labelledById, setLabelledById] = React.useState<string | undefined>()
  const context = React.useMemo<CardContextValue>(
    () => ({ labelledById }),
    [labelledById]
  )

  return (
    <CardContext.Provider value={context}>
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
          return React.cloneElement(child as any, {
            __cardTitleId: titleId,
            __setCardLabelledBy: (id: string) => setLabelledById(id),
          })
        })}
      </article>
    </CardContext.Provider>
  )
})

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  title?: React.ReactNode
  subtitle?: React.ReactNode
  __cardTitleId?: string
  __setCardLabelledBy?: (id: string) => void
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader(
    {
      className,
      title,
      subtitle,
      level = 3,
      children,
      __cardTitleId,
      __setCardLabelledBy,
      ...rest
    },
    ref
  ) {
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
              <p className="muted text-sm" style={{ marginTop: "4px" }}>
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
)

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement> & {
  scrollY?: number
  padded?: boolean
}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  function CardBody({ className, scrollY, padded = true, ...rest }, ref) {
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
)

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: Align
  separated?: boolean
}

const alignToClass: Record<Align, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter(
    { className, align = "end", separated = true, ...rest },
    ref
  ) {
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
)

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})
