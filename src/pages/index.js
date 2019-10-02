import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/Navbar"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import TopSection from "../components/TopSection"
import SkillSection from "../components/SkillSection"
import ProjectSection from "../components/ProjectSection"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },

  scrollContainer: {
    position: "relative",
  },
  scrollElement: {
    position: "absolute",
    top: "-" + theme.spacing(12) + "px",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  let topRef = useRef(null)
  let skillsRef = useRef(null)
  let projectsRef = useRef(null)
  let projects = []

  useEffect(() => {
    //only works with set timeout when coming from another page
    // setTimeout(() => {
    //   if (parseInt(query.section, 10) > 0) {
    //     scrollNext(query.section, "auto")
    //   }
    // }, 0)
  }, [])

  const scrollNext = (index, b) => {
    switch (parseInt(index, 10)) {
      case 0:
        topRef.current.scrollIntoView({ behavior: b ? "auto" : "smooth" })
        break

      case 1:
        skillsRef.current.scrollIntoView({ behavior: b ? "auto" : "smooth" })
        break

      case 2:
        projectsRef.current.scrollIntoView({ behavior: b ? "auto" : "smooth" })
        break
    }
  }

  return (
    <Layout>
      <SEO title="Home | Jordan Portfolio" description="My Portfolio" />
      <NavBar scrollNext={scrollNext} type="index" />
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <TopSection scrollNext={scrollNext}>
            <div ref={topRef} className={classes.scrollElement} />
          </TopSection>

          <SkillSection scrollNext={scrollNext}>
            <div className={classes.scrollContainer}>
              <div ref={skillsRef} className={classes.scrollElement} />
            </div>
          </SkillSection>

          {/*<ProjectSection scrollNext={scrollNext} projects={projects}>
            <div className={classes.scrollContainer}>
              <div ref={projectsRef} className={classes.scrollElement} />
            </div>
          </ProjectSection>*/}
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage
