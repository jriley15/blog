import React, { useRef, useEffect } from "react"
import NavBar from "../components/Navbar"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import TopSection from "../components/TopSection"
import SkillSection from "../components/SkillSection"
import ProjectSection from "../components/ProjectSection"
import Head from "next/head"
import { getProjects } from "../data/projects"

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

const IndexPage = ({ query, projects }) => {
  const classes = useStyles()

  let topRef = useRef(null)
  let skillsRef = useRef(null)
  let projectsRef = useRef(null)

  useEffect(() => {
    //only works with set timeout when coming from another page
    setTimeout(() => {
      if (parseInt(query.section, 10) > 0) {
        scrollNext(query.section, "auto")
      }
    }, 0)
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
    <>
      <Head>
        <title>Home | Jordan Portfolio</title>
        <meta name="description" content="My Portfolio" />
      </Head>

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

          <ProjectSection scrollNext={scrollNext} projects={projects}>
            <div className={classes.scrollContainer}>
              <div ref={projectsRef} className={classes.scrollElement} />
            </div>
          </ProjectSection>
        </Grid>
      </div>
    </>
  )
}

IndexPage.getInitialProps = async ({ query }) => {
  return { query, projects: await getProjects() }
}

export default IndexPage
