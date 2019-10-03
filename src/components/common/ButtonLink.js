import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

const ButtonLink = React.forwardRef(
  ({ className, children, variant, to, size }, ref) => (
    <Link to={to} ref={ref} style={{ textDecoration: "none" }}>
      <Button className={className} variant={variant}>
        {children}
      </Button>
    </Link>
  )
)

export default ButtonLink
