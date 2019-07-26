import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import NavBar from "../components/Navbar"
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
import TopSection from "../components/TopSection"
import SkillSection from "../components/SkillSection"
import ProjectSection from "../components/ProjectSection"

/*
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>

    <Button variant="outlined" component={Link} to="/page-2/">
      Test button
    </Button>
  </Layout>
)*/

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  //https://www.jordanriley.me/static/media/me.c702f970.jpg

  return (
    <>
      <SEO title="Home" />
      <NavBar />
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <TopSection />

          <SkillSection />

          <ProjectSection />
        </Grid>
      </div>
    </>
  )
}

export default IndexPage
