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
    paddingBottom: theme.spacing(6),
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
    backgroundColor: "#303030",
  },
  skillsContainer: {
    //padding: theme.spacing(1),
    width: "700px",
    maxWidth: "100%",
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

  titleFont: {
    fontWeight: 100,
    marginBottom: theme.spacing(3),
  },
  icons: {
    padding: theme.spacing(3.5),
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
              variant="h3"
              gutterBottom
              className={classes.titleFont}
              align="center"
            >
              Skills
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
              align="center"
              gutterBottom
            >
              A list of all the technical skills I've aquired through school,
              work, and self-teaching.
            </Typography>
          </Fade>
        </Grid>
        <Grid item className={classes.container}>
          <Grid container justify="center">
            <Grid item className={classes.skillsContainer}>
              <Grid container justify="space-evenly">
                <Grid item className={classes.icons}>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                  >
                    Programming Languages
                  </Typography>
                  <ProgrammingIcons />
                </Grid>
                <Grid item className={classes.icons}>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                  >
                    Frameworks
                  </Typography>
                  <FrameworkIcons />
                </Grid>
                <Grid item className={classes.icons}>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                  >
                    Storage
                  </Typography>
                  <StorageIcons />
                </Grid>
                <Grid item className={classes.icons}>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                  >
                    Tools
                  </Typography>
                  <ToolIcons />
                </Grid>
                <Grid item className={classes.icons}>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                  >
                    Cloud Providers
                  </Typography>
                  <CloudIcons />
                </Grid>
                <Grid item className={classes.icons}>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
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
