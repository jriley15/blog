import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "gatsby"
import Logo from "../images/Jrdn.png"
import useScrollPosition from "../hooks/useScrollPosition"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    width: "90px",
  },
  navButton: {
    color: "#FFFFFF",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    //textTransform: "none",
  },
  navBar: {
    //background: "transparent",
    transition: "background-color 0.5s ease, box-shadow 0.5s ease",
    //alignItems: "center",
  },
  toolBar: {
    //width: "100%",
    //maxWidth: "1200px",
  },
}))

export default function NavBar() {
  const classes = useStyles()

  const y = useScrollPosition()

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.navBar}
        style={{
          backgroundColor: y === 0 ? "transparent" : "#303030",
          boxShadow:
            y === 0
              ? "none"
              : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Toolbar className={classes.toolBar}>
          <Link to="/">
            <img src={Logo} className={classes.logo} />
          </Link>
          <div className={classes.grow} />

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
