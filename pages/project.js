import React from "react"
import NavBar from "../components/Navbar"
import { classes, makeStyles } from "@material-ui/styles"
import { Grid, Typography, Button } from "@material-ui/core"
import JMarkdown from "../components/JMarkdown"
import Carousel from "../components/gallery/Carousel"
import WebIcon from "@material-ui/icons/Web"

const useStyles = makeStyles(theme => ({
  root: {
    //padding: theme.spacing(1),
    //background:
    //  "linear-gradient(rgba(120, 80, 228, 0.8), rgba(13, 186, 134, 0.8)), url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/JrbItQz/white-polygonal-geometric-surface-seamless-loop-4k-uhd-3840x2160_nyllfzz7e__F0000.png') no-repeat center",
    backgroundColor: "#FFFFFF",
    backgroundSize: "cover",
    position: "relative",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh",
  },
  topSection: {
    boxShadow: "inset 0 0 20px rgba(0,0,0,.5)",
    padding: theme.spacing(1),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: "#2b313c",
    marginTop: theme.spacing(8),
  },
  markDown: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    maxWidth: "700px",
    textAlign: "left",
  },
  icon: {
    marginLeft: theme.spacing.unit,
    width: "24px",
    height: "24px",
  },
}))

const Page = ({ query }) => {
  const classes = useStyles()

  const { project } = query

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Grid
          container
          direction="column"
          className={classes.topSection}
          justify="center"
        >
          <Grid item xs={12}>
            <Typography align="center" variant="h2" gutterBottom>
              {project.title}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center" gutterBottom>
              {project.description}
            </Typography>
          </Grid>

          <Grid item>
            <Carousel images={project.images} />
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!project.demoLink}
                  onClick={() => window.open(project.demoLink)}
                >
                  Live Demo
                  <WebIcon className={classes.icon} />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  disabled={!project.sourceLink}
                  className={classes.button}
                  onClick={() => window.open(project.sourceLink)}
                >
                  Repository {!project.sourceLink && "(private)"}
                  <img
                    src="/static/images/github.svg"
                    className={classes.icon}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <JMarkdown content={project.markDown} />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

Page.getInitialProps = ({ query }) => {
  return { query }
}

export default Page