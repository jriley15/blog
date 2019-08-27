import React from "react"
import Link from "next/link"
import { makeStyles, fade } from "@material-ui/core/styles"
import { Typography, Grid, Button, ButtonBase } from "@material-ui/core"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import ButtonBaseLink from "./common/ButtonBaseLink"

const useStyles = makeStyles(theme => ({
  root: {
    background:
      "linear-gradient(rgba(	43, 49, 60, 0.9), rgba(		43, 49, 60, 0.9)), url('https://digileaders.com/wp-content/uploads/2018/09/coding-on-laptop_4460x4460-e1537450504196.jpg') no-repeat center",

    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      backgroundAttachment: "fixed",
    },
    boxShadow: "inset 0 0 20px rgba(0,0,0,.5)",

    width: "100%",
    height: "100%",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),

    overflowX: "hidden",
  },

  svg: {
    width: "100%",
    //position: "absolute",
    //top: -5,
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
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  projects: {
    width: "calc(100% - 16px)",
    maxWidth: "1200px",
    paddingTop: theme.spacing(6),
  },
  card: {
    //background: "rgba(255, 255, 255, 0.6)",
    //color: "#000000",
    width: "384px",
  },
  cardContainer: {
    //padding: theme.spacing(1),
  },
  cardImage: {},

  titleFont: {
    fontWeight: 100,
  },

  projectGridItem: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    width: "700px",
    maxWidth: "100%",

    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },

  projectDiv: {
    borderLeft: "1px solid transparent",
    padding: theme.spacing(2),
    transition: theme.transitions.create("background-color"),
    backgroundColor: fade(theme.palette.common.white, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      //transform: "scale(1.1)",
    },
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
    transition:
      "background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "scale(1, 1)",

    cursor: "pointer",
    borderRadius: "4px",
  },

  previewImageAvatar: {
    //margin: 10,
    maxWidth: 220,
    height: 150,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "3px",
  },

  divider: {
    marginTop: theme.spacing(4),
  },

  projectButton: {
    width: "100%",
  },
}))

const ProjectSection = ({ children, projects }) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.root}>
      <Grid container justify="center" className={classes.projectContainer}>
        {children}
        <Grid item xs={12}>
          <Fade up>
            <Typography
              variant="h3"
              align="center"
              className={classes.titleFont}
              gutterBottom
            >
              Projects
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
              align="center"
              gutterBottom
            >
              Documentation on some of the notable projects I've worked on over
              the years.
            </Typography>
          </Fade>
        </Grid>

        <Grid container direction="column" alignItems="center">
          <Slide right>
            {projects
              .sort((a, b) => {
                return new Date(b.publishedAt) - new Date(a.publishedAt)
              })
              .map((project, index) => (
                <Grid
                  item
                  key={project._id}
                  className={classes.projectGridItem}
                >
                  <ButtonBaseLink
                    href={{
                      pathname: `/project`,
                      query: { id: project._id },
                    }}
                    as={`/project/${project.slug.current}`}
                    className={classes.projectButton}
                  >
                    <Grid
                      container
                      className={classes.projectDiv}
                      justify="space-between"
                      alignItems="center"
                    >
                      {index % 2 !== 0 && (
                        <Grid item>
                          <div className={classes.previewImageAvatar}>
                            <img
                              src={project.images[0]}
                              style={{ height: "100%" }}
                              alt="preview"
                            />
                          </div>
                        </Grid>
                      )}
                      <Grid item xs>
                        <Grid
                          container
                          direction="column"
                          alignItems={
                            index % 2 !== 0 ? "flex-end" : "flex-start"
                          }
                        >
                          <Grid item>
                            <Typography
                              gutterBottom
                              variant="h4"
                              component="h2"
                              className={classes.titleFont}
                              align={index % 2 !== 0 ? "right" : "left"}
                            >
                              {project.title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body1"
                              component="p"
                              color="textSecondary"
                              align={index % 2 !== 0 ? "right" : "left"}
                            >
                              {project.description}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Button variant="outlined" style={{ marginTop: 8 }}>
                              View More
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                      {index % 2 === 0 && (
                        <Grid item>
                          <div className={classes.previewImageAvatar}>
                            <img
                              src={project.images[0]}
                              style={{ height: "100%" }}
                              alt="preview"
                            />
                          </div>
                        </Grid>
                      )}
                    </Grid>
                  </ButtonBaseLink>
                </Grid>
              ))}
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProjectSection
