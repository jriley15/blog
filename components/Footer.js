import React, { useEffect, useState } from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles"
import {
  Grid,
  Button,
  Typography,
  Box,
  Slide,
  Fab,
  Tooltip,
} from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"

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
    //left: 0,
    top: "calc(50% - 100px)",
    right: 0,
    paddingRight: theme.spacing(1) / 2,
  },
  fab: {
    margin: theme.spacing(1) / 2,
  },
}))

const Footer = () => {
  const classes = useStyles()

  const [mountIcons, setMountIcons] = useState(false)

  useEffect(() => {
    setMountIcons(true)
  }, [])

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
      <Box className={classes.socials} display="flex" flexDirection="column">
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
                <EmailIcon style={{ color: "#303030" }} />
              </Fab>
            </Tooltip>
          </div>
        </Slide>
      </Box>
    </div>
  )
}

export default Footer
