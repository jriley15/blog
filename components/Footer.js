import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Box, Slide, Fab, Tooltip } from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"
import useScrollPosition from "../hooks/useScrollPosition"
import { useTheme } from "@material-ui/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  footer: {
    maxWidth: "840px",
  },
  paddingTop: {
    paddingTop: theme.spacing(2),
  },
  footerLink: {
    textDecoration: "underline",

    "&:hover": {
      color: "grey",

      cursor: "pointer",
    },
  },

  icon: {
    width: "24px",
  },

  socials: {
    position: "fixed",
    zIndex: theme.zIndex.modal,

    top: "calc(50% - 72px)",
    //top: theme.spacing(8.5),
    [theme.breakpoints.down("xs")]: {
      top: theme.spacing(8),
      //left: theme.spacing(7),
      //flexDirection: "row",
    },
    right: 0,
    paddingRight: theme.spacing(0.4),
    transition: "opacity 0.5s",
  },

  fab: {
    margin: theme.spacing(0.5),
  },
}))

const Footer = ({ routeChanged }) => {
  const classes = useStyles()

  const [mountIcons, setMountIcons] = useState(false)

  const y = useScrollPosition()

  useEffect(() => {
    setMountIcons(true)
  }, [])

  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <div className={classes.root}>
      <Grid container justify="center" direction="column" alignItems="center">
        <Grid item className={classes.paddingTop}>
          <Grid container justify="center">
            <Grid item>
              <Typography>© 2019 Jordan Riley</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Floating social icons */}
      <Box
        className={classes.socials}
        flexDirection="column"
        display="flex"
        style={{
          opacity: routeChanged
            ? mobile
              ? 0
              : 0.5
            : y === 0
            ? 1
            : mobile
            ? 0
            : 0.5,
        }}
      >
        <Slide direction="up" in={mountIcons} unmountOnExit timeout={500}>
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
              alt="github"
            />
          </Fab>
        </Slide>
        <Slide direction="up" in={mountIcons} unmountOnExit timeout={700}>
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
              alt="linkedin"
            />
          </Fab>
        </Slide>
        <Slide direction="up" in={mountIcons} unmountOnExit timeout={900}>
          <div>
            <Tooltip title="Click to copy email to clipboard" interactive>
              <Fab
                aria-label="linkedin"
                size="small"
                onClick={() => {
                  navigator.clipboard.writeText("jordanr3@live.com")
                }}
                className={classes.fab}
              >
                <EmailIcon style={{ color: "#303030" }} alt="email" />
              </Fab>
            </Tooltip>
          </div>
        </Slide>
      </Box>
    </div>
  )
}

export default Footer
