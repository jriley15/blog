import React from "react"
import Link from "next/link"
import Button from "@material-ui/core/Button"

const ButtonLink = React.forwardRef(
  ({ className, href, as, children, prefetch, variant }, ref) => (
    <Link href={href} as={as} prefetch ref={ref}>
      <Button className={className} variant={variant}>
        {children}
      </Button>
    </Link>
  )
)

export default ButtonLink
