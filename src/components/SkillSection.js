import React from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  Fade,
  Zoom,
  Paper,
  Avatar,
  Slide,
} from "@material-ui/core"
import ProgrammingIcons from "./ProgrammingIcons"
import FrameworkIcons from "./FrameworkIcons"

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    marginTop: theme.spacing(3),
  },

  container: {
    padding: theme.spacing(1),
    width: "100%", //"750px",
    height: "100%",
    //paddingTop: theme.spacing(8),
  },
  plz: {
    width: "100%",
    height: "100%",
  },
  purple: {
    color: "#7850e4",
  },

  skillsSection: {
    padding: theme.spacing(2),
    width: "100%",
  },
  skillsContainer: {
    padding: theme.spacing(1),
  },
  black: {
    color: "#000000",
  },
  grey: {
    color: "grey",
  },
}))

const SkillSection = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} className={classes.skillsSection}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.plz}
      >
        <Grid item xs={12}>
          <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <div className={classes.container}>
              <Typography
                variant="h4"
                gutterBottom
                className={classes.purple}
                align="center"
              >
                Skills
              </Typography>
              <Grid
                container
                justify="space-evenly"
                className={classes.skillsContainer}
                spacing={2}
              >
                <Grid item>
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
                <Grid item>
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
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                  >
                    Storage
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.purple}
                    align="center"
                    gutterBottom
                  >
                    Cloud Providers
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SkillSection
