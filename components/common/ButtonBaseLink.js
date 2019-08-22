import React from "react"
import Link from "next/link"
import { ButtonBase } from "@material-ui/core"

const ButtonLink = React.forwardRef(
  ({ className, href, as, children, prefetch, variant }, ref) => (
    <Link href={href} as={as} prefetch ref={ref}>
      <ButtonBase className={className} variant={variant}>
        {children}
      </ButtonBase>
    </Link>
  )
)

export default ButtonLink
