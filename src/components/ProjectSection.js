import React from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  Zoom,
  Paper,
  Avatar,
  Slide,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
} from "@material-ui/core"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },

  topSection: {
    width: "100%",
    //height: "700px", //"55vh",
    //backgroundColor: theme.palette.primary.main,
    //background:
    //  "linear-gradient(rgba(	48, 48, 48, 0.7), rgba(120, 80, 228, 0.5)), url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/JrbItQz/white-polygonal-geometric-surface-seamless-loop-4k-uhd-3840x2160_nyllfzz7e__F0000.png') no-repeat center",
    backgroundSize: "cover",
    position: "relative",
    backgroundAttachment: "fixed",
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(16),
  },

  svg: {
    width: "100%",
    position: "absolute",
    top: -5,
    transform: "rotate(180deg)",
  },

  buttonGroup: {
    marginTop: theme.spacing(3),
  },

  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  projectContainer: {
    //width: "100%",
    height: "100%",
    paddingTop: theme.spacing(8),
  },
  projects: {
    width: "calc(100% - 16px)",
    maxWidth: "1200px",
    paddingTop: theme.spacing(6),
  },
  card: {
    maxWidth: 384,
    //background: "rgba(255, 255, 255, 0.6)",
    //color: "#000000",
  },
  cardContainer: {
    //padding: theme.spacing(1),
  },
}))

const ProjectSection = () => {
  const classes = useStyles()

  let projects = []

  for (let i = 0; i < 10; i++) {
    projects.push({ id: i, title: "test " + i })
  }

  return (
    <Grid item className={classes.topSection}>
      <svg viewBox="0 0 100 15" className={classes.svg}>
        <path fill="#303030" opacity="0.5" d="M0 30 V15 Q30 3 60 15 V30z" />
        <path fill="#303030" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
      </svg>

      <Grid container justify="center" className={classes.projectContainer}>
        <Grid item xs={12}>
          <Fade up>
            <Typography variant="h4" align="center">
              Projects
            </Typography>
          </Fade>
        </Grid>
        <Grid item>
          <Grid container justify="center">
            <Grid item className={classes.projects}>
              <Grid container justify="center" spacing={2}>
                {projects.map((project, index) => (
                  <Grid item className={classes.cardContainer}>
                    <Fade>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image="https://images.jrdn.tech/jchat-0.PNG"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {project.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small">View More</Button>
                        </CardActions>
                      </Card>
                    </Fade>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProjectSection
