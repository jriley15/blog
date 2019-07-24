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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },

  topSection: {
    width: "100%",
    height: "700px", //"55vh",
    //backgroundColor: theme.palette.primary.main,
    background:
      "linear-gradient(rgba(120, 80, 228, 0.9), rgba(221, 73, 110, 0.9)), url('https://digileaders.com/wp-content/uploads/2018/09/coding-on-laptop_4460x4460-e1537450504196.jpg') no-repeat center",
    backgroundSize: "cover",

    position: "relative",
  },

  svg: {
    width: "100%",
    position: "absolute",
    bottom: -5,
  },

  buttonGroup: {
    marginTop: theme.spacing(3),
  },

  container: {
    padding: theme.spacing(1),
    width: "750px",
    height: "100%",
    //paddingTop: theme.spacing(8),
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  plz: {
    width: "100%",
    height: "100%",
  },
}))

const TopSection = () => {
  const classes = useStyles()

  return (
    <Grid item className={classes.topSection}>
      <div className={classes.gradient} />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.plz}
      >
        <Grid item>
          <Fade in={true} timeout={500}>
            <div className={classes.container}>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Me"
                    src="https://www.jordanriley.me/static/media/me.c702f970.jpg"
                    className={classes.bigAvatar}
                  />
                </Grid>
                <Grid>
                  <Typography variant="h2" align="center">
                    Hello, I'm Jordan Riley
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" align="center" color="textSecondary">
                A software developer / student based in Phoenix, Arizona.
              </Typography>
              <Grid
                container
                justify="center"
                spacing={1}
                className={classes.buttonGroup}
              >
                <Grid item>
                  <Button variant="outlined">About Me</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Projects</Button>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Grid>
      </Grid>
      <svg viewBox="0 0 100 15" className={classes.svg}>
        <path fill="#ffffff" opacity="0.5" d="M0 30 V15 Q30 3 60 15 V30z" />
        <path fill="#ffffff" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
      </svg>
    </Grid>
  )
}

export default TopSection
