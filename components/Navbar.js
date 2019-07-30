import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Link from "next/link"
import useScrollPosition from "../hooks/useScrollPosition"
import { Grid } from "@material-ui/core"
import Contact from "./Contact"

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
    width: "100px",
    cursor: "pointer",
    padding: theme.spacing(1),
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

export default function NavBar({ scrollNext, type }) {
  const classes = useStyles()

  const y = useScrollPosition()

  const [open, setOpen] = useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.navBar}
        style={{
          backgroundColor:
            type === "index"
              ? y === 0
                ? "transparent"
                : "#303030"
              : "rgba(120, 80, 228)",
          boxShadow:
            y === 0
              ? "none"
              : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Toolbar className={classes.toolBar}>
          <Link href="/">
            <img src="/static/images/Jrdn.png" className={classes.logo} />
          </Link>
          <div className={classes.grow} />

          {type === "index" && (
            <Button
              size="large"
              className={classes.navButton}
              onClick={() => scrollNext(2)}
            >
              Projects
            </Button>
          )}
          {type !== "index" && (
            <Link href="/projects">
              <Button size="large" className={classes.navButton}>
                Projects
              </Button>
            </Link>
          )}

          {/*<Button
            size="large"
            className={classes.navButton}
            onClick={() => scrollNext(1)}
          >
            Skills
          </Button>

          <Button size="large" className={classes.navButton}>
            About
          </Button>*/}
          <Button className={classes.navButton} size="large">
            Resume
          </Button>
          <Button className={classes.navButton} size="large">
            Blog
          </Button>
          <Button
            variant="outlined"
            className={classes.navButton}
            onClick={handleClickOpen}
            size="large"
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <Contact open={open} handleClose={handleClose} />
    </div>
  )
}
