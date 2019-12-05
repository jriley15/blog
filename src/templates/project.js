import React from "react"
import NavBar from "../components/NavBar"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography, Button, Box } from "@material-ui/core"
import Carousel from "../components/gallery/Carousel"
import WebIcon from "@material-ui/icons/Web"
import SEO from "../components/seo"
import serializers from "../components/common/serializers"
import BlockContent from "@sanity/block-content-to-react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  root: {
    //padding: theme.spacing(1),
    //background:
    //  "linear-gradient(rgba(120, 80, 228, 0.8), rgba(13, 186, 134, 0.8)), url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/JrbItQz/white-polygonal-geometric-surface-seamless-loop-4k-uhd-3840x2160_nyllfzz7e__F0000.png') no-repeat center",
    //backgroundColor: "#fafafa",
    background: "rgba(255,255,255,0.1)",

    //color: theme.palette.common.black,
    backgroundSize: "cover",
    position: "relative",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
    },
    minHeight: "calc(100vh - 168px)",
  },
  topSection: {
    boxShadow: "inset 0 0 20px rgba(0,0,0,.5)",
    padding: theme.spacing(1),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: "#2b313c",

    color: theme.palette.common.white,
  },
  markDown: {
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
    width: "700px",
    maxWidth: "100vw",
    wordBreak: "break-word",
  },
  icon: {
    marginLeft: theme.spacing.unit,
    width: "24px",
    height: "24px",
  },
  titleFont: {
    fontWeight: 100,
  },

  carousel: {
    //maxWidth: 700,
  },
  paddingBottom: {
    paddingBottom: theme.spacing(2),
  },
  title: {
    maxWidth: 750,
  },
}))

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      title
      description
      demo
      images
      repository
      _rawBody
      slug {
        current
      }
    }
  }
`

const Page = props => {
  const classes = useStyles()

  const { data, errors } = props
  const project = data && data.project

  return (
    <Layout>
      <SEO title={project.title} description={project.description} />
      <NavBar />
      <div className={classes.root}>
        <Grid
          container
          direction="column"
          className={classes.topSection}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.title}>
            <Typography
              align="center"
              variant="h3"
              className={classes.titleFont}
              gutterBottom
            >
              {project.title}
            </Typography>

            <Typography
              align="center"
              gutterBottom
              color="textSecondary"
              className={classes.paddingBottom}
            >
              {project.description}
            </Typography>
          </Grid>

          <Grid item>
            <Carousel images={project.images} />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!project.demo}
                  onClick={() => window.open(project.demo)}
                >
                  Live Demo
                  <WebIcon className={classes.icon} />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  disabled={!project.repository}
                  className={classes.button}
                  onClick={() => window.open(project.repository)}
                >
                  Repository {!project.repository && "(private)"}
                  <img
                    src="https://images.jrdn.tech/github.svg"
                    className={classes.icon}
                    alt="github"
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center">
          <div className={classes.markDown}>
            <BlockContent blocks={project._rawBody} serializers={serializers} />
          </div>
        </Box>
      </div>
    </Layout>
  )
}

export default Page
