import React from "react"
import { Link } from "gatsby"
import { ButtonBase } from "@material-ui/core"

const ButtonLink = React.forwardRef(
  ({ className, to, children, variant }, ref) => (
    <Link to={to} style={{ textDecoration: "none", color: "white" }}>
      <ButtonBase
        className={className}
        variant={variant}
        component="div"
        style={{ textDecoration: "none" }}
      >
        {children}
      </ButtonBase>
    </Link>
  )
)

export default ButtonLink
