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
import {
  Grid,
  Fab,
  Box,
  Tooltip,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core"
import Contact from "./Contact"
import EmailIcon from "@material-ui/icons/Email"
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

  icon: {
    width: "24px",
  },

  socials: {
    position: "fixed",
    zIndex: theme.zIndex.modal,
    //left: 0,
    top: "calc(50% - 100px)",
    right: 0,
    paddingRight: theme.spacing(1) / 2,
  },
  fab: {
    margin: theme.spacing(1) / 2,
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
            type === "index"
              ? y === 0
                ? "transparent"
                : "rgba(120, 80, 228)"
              : "rgba(120, 80, 228)",
          boxShadow:
            y === 0 && type === "index"
              ? "none"
              : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Toolbar className={classes.desktopToolBar}>
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
            <img src="/static/images/Jrdn.png" className={classes.logo} />
          </Link>
        </Toolbar>
      </AppBar>

      <Contact open={contactOpen} handleClose={handleContactClose} />

      {/* Floating social icons */}
      <Box className={classes.socials} display="flex" flexDirection="column">
        <Fab
          aria-label="github"
          size="small"
          color="default"
          onClick={() => window.open("https://github.com/jriley15")}
          className={classes.fab}
        >
          <img
            src="https://image.flaticon.com/icons/svg/25/25231.svg"
            className={classes.icon}
          />
        </Fab>
        <Fab
          aria-label="linkedin"
          size="small"
          color="default"
          onClick={() =>
            window.open("https://www.linkedin.com/in/jordan-riley-090564158/")
          }
          className={classes.fab}
        >
          <img
            src="https://image.flaticon.com/icons/svg/174/174857.svg"
            className={classes.icon}
          />
        </Fab>
        <Tooltip title="Click to copy email to clipboard" interactive>
          <Fab
            aria-label="linkedin"
            size="small"
            onClick={() => {
              navigator.clipboard.writeText("jordanr3@live.com")
            }}
            className={classes.fab}
          >
            <EmailIcon style={{ color: "#303030" }} />
          </Fab>
        </Tooltip>
      </Box>

      {/* Responsive mobile nav drawer */}
      <Drawer open={drawerOpen} onClose={handleDrawerClose}>
        <List className={classes.list}>
          <Link href="/blog">
            <ListItem>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
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
