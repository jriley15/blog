import React from "react"
import Link from "next/link"

import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  Zoom,
  Paper,
  Avatar,
  Slide,
  Fab,
} from "@material-ui/core"
import ProgrammingIcons from "./ProgrammingIcons"
import FrameworkIcons from "./FrameworkIcons"
import clsx from "clsx"
import StorageIcons from "./StorageIcons"
import CloudIcons from "./CloudIcons"
import ToolIcons from "./ToolIcons"
import OSIcons from "./OSIcons"
import Fade from "react-reveal/Fade"
import DownArrow from "@material-ui/icons/KeyboardArrowDown"

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    marginTop: theme.spacing(3),
  },

  container: {
    //padding: theme.spacing(2),
    width: "100%",

    //paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  plz: {
    //width: "100%",
    height: "100%",
  },
  purple: {
    //color: "#4900ff",
    marginBottom: theme.spacing(3),
  },

  root: {
    width: "100%",
    paddingTop: theme.spacing(8),
    position: "relative",
    paddingBottom: theme.spacing(8),
    //height: "calc(100vh - 56px)",
  },
  skillsContainer: {
    //padding: theme.spacing(1),
    width: "calc(100% - 72px)",
    maxWidth: "1200px",
    paddingTop: theme.spacing(4),
  },
  black: {
    color: "#000000",
  },
  grey: {
    color: "grey",
  },
  svg: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },

  wave: {
    animation: "drift 4000ms infinite linear",
    animationName: "$drift",
  },

  "@keyframes drift": {
    from: { transform: "rotate(0deg)" },
    from: { transform: "rotate(360deg)" },
  },

  scrollArrow: {
    bottom: theme.spacing(2),
    position: "absolute",
    animation: "bounce .3s infinite alternate",
    animationName: "$bounce",
    "&:hover": {
      animation: "none",
    },
  },

  "@keyframes bounce": {
    "0%": {
      transform: "translate(0px, 0px)",
    },
    "100%": {
      transform: "translate(0px, 10px)",
    },
  },
}))

const SkillSection = ({ scrollNext, children }) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.root}>
      <Grid container justify="center" direction="column" alignItems="center">
        {children}
        <Grid item>
          <Fade up>
            <Typography
              variant="h4"
              gutterBottom
              className={classes.purple}
              align="center"
            >
              Skills
            </Typography>
          </Fade>
        </Grid>
        <Grid item className={classes.container}>
          <Grid container justify="center">
            <Grid item className={classes.skillsContainer}>
              <Grid container justify="space-evenly" spacing={7}>
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                    color="textSecondary"
                  >
                    Programming Languages
                  </Typography>
                  <ProgrammingIcons />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                    color="textSecondary"
                  >
                    Frameworks
                  </Typography>
                  <FrameworkIcons />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                    color="textSecondary"
                  >
                    Storage
                  </Typography>
                  <StorageIcons />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                    color="textSecondary"
                  >
                    Cloud Providers
                  </Typography>
                  <CloudIcons />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                    color="textSecondary"
                  >
                    Tools
                  </Typography>
                  <ToolIcons />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                    color="textSecondary"
                  >
                    Operating Systems
                  </Typography>
                  <OSIcons />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Fab
          size="small"
          color="primary"
          aria-label="Next"
          color="default"
          className={classes.scrollArrow}
          onClick={() => scrollNext(2)}
        >
          <DownArrow fontSize="large" />
        </Fab>
      </Grid>
    </Grid>
  )
}

export default SkillSection
