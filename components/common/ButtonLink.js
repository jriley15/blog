import React from "react"
import Link from "next/link"
import Button from "@material-ui/core/Button"

const ButtonLink = React.forwardRef(
  ({ className, href, as, children, prefetch }, ref) => (
    <Link href={href} as={as} prefetch ref={ref}>
      <a className={className}>{children}</a>
    </Link>
  )
)

export default ButtonLink
