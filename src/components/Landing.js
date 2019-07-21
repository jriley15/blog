import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },

  topSection: {
    width: "100%",
    height: "55vh",
    backgroundColor: theme.palette.primary.main,
    position: "relative",
  },

  svg: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },

  title: {
    paddingTop: theme.spacing(5),
  },

  appButton: {
    height: "140px",

    "&:hover": {
      opacity: ".7",
    },
  },
}))

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.topSection}>
        <Typography
          variant="h2"
          align="center"
          className={classes.title}
          gutterBottom
        >
          Lorem ipsum
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Grid container justify="center" spacing={1}>
          <Grid item>
            <img
              src="https://images.jrdn.tech/app-store-badge.svg"
              className={classes.appButton}
            />
          </Grid>
          <Grid item>
            <img
              src="https://images.jrdn.tech/google-play-badge.svg"
              className={classes.appButton}
            />
          </Grid>
        </Grid>

        <svg viewBox="0 0 100 25" className={classes.svg}>
          <path fill="#292D3E" opacity="0.5" d="M0 30 V15 Q30 3 60 15 V30z" />
          <path fill="#292D3E" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
        </svg>
      </div>
    </div>
  )
}

export default Landing
