import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
  },
  navButton: {
    color: "#FFFFFF",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  navBar: {
    background: "transparent",
    boxShadow: "none",
  },
}))

export default function NavBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.navBar}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            to="/"
          >
            Logo
          </Typography>
          <Button component={Link} to="/about" className={classes.navButton}>
            About
          </Button>
          <Button className={classes.navButton}>Projects</Button>
          <Button variant="outlined" className={classes.navButton}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
