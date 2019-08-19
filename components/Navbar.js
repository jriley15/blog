import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Link from "next/link"
import useScrollPosition from "../hooks/useScrollPosition"
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core"
import Contact from "./Contact"
import ContactMail from "@material-ui/icons/ContactMail"
import Home from "@material-ui/icons/Home"
import { default as ListIcon } from "@material-ui/icons/List"
import FormatAlignCenter from "@material-ui/icons/FormatAlignCenter"
import Build from "@material-ui/icons/Build"

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
    alignItems: "center",
  },
  desktopToolBar: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    width: "100%",
    maxWidth: "1080px",
  },

  mobileToolbar: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  list: {
    width: 200,
  },
}))

export default function NavBar({ scrollNext, type }) {
  const classes = useStyles()

  const y = useScrollPosition()

  const [contactOpen, setContactOpen] = useState(false)

  const [drawerOpen, setDrawerOpen] = useState(false)

  function handleContactOpen() {
    setContactOpen(true)
  }

  function handleContactClose() {
    setContactOpen(false)
  }

  function handleDrawerOpen() {
    setDrawerOpen(true)
  }

  function handleDrawerClose() {
    setDrawerOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.navBar}
        style={{
          backgroundColor:
            type === "index" && y === 0 ? "transparent" : "rgb(120, 80, 228)",
          boxShadow:
            y === 0 && type === "index"
              ? "none"
              : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
      >
        {/* Desktop nav bar */}
        <Toolbar className={classes.desktopToolBar}>
          <Link href="/">
            <img
              src="/static/images/Jrdn.png"
              className={classes.logo}
              alt="logo"
            />
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
            <Link
              prefetch
              href={{ pathname: "/index", query: { section: 2 } }}
              as="/projects"
            >
              <Button size="large" className={classes.navButton}>
                Projects
              </Button>
            </Link>
          )}

          <Link href="/blog">
            <Button className={classes.navButton} size="large">
              Blog
            </Button>
          </Link>
          <Link href="/resume">
            <Button className={classes.navButton} size="large">
              Resume
            </Button>
          </Link>
          <Button
            variant="outlined"
            className={classes.navButton}
            onClick={handleContactOpen}
            size="large"
          >
            Contact
          </Button>
        </Toolbar>

        {/* Mobile nav bar */}
        <Toolbar className={classes.mobileToolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.grow} />

          <Link href="/">
            <img
              src="/static/images/Jrdn.png"
              className={classes.logo}
              alt="logo"
            />
          </Link>
        </Toolbar>
      </AppBar>

      <Contact open={contactOpen} handleClose={handleContactClose} />

      {/* Responsive mobile nav drawer */}
      <Drawer open={drawerOpen} onClose={handleDrawerClose}>
        <List className={classes.list}>
          <Link href="/">
            <ListItem
              onClick={async () => {
                await handleDrawerClose()
              }}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>

          {type === "index" ? (
            <ListItem
              onClick={async () => {
                await handleDrawerClose()
                scrollNext(2)
              }}
            >
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItem>
          ) : (
            <Link
              prefetch
              href={{ pathname: "/index", query: { section: 2 } }}
              as="/projects"
            >
              <ListItem>
                <ListItemIcon>
                  <Build />
                </ListItemIcon>
                <ListItemText primary={"Projects"} />
              </ListItem>
            </Link>
          )}

          <Link href="/blog">
            <ListItem>
              <ListItemIcon>
                <FormatAlignCenter />
              </ListItemIcon>
              <ListItemText primary={"Blog"} />
            </ListItem>
          </Link>
          <Link href="/resume">
            <ListItem>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary={"Resume"} />
            </ListItem>
          </Link>
          <ListItem button onClick={handleContactOpen}>
            <ListItemIcon>
              <ContactMail />
            </ListItemIcon>
            <ListItemText primary={"Contact"} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
