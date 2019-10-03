import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import TopSection from "../components/TopSection"
import SkillSection from "../components/SkillSection"
import ProjectSection from "../components/ProjectSection"
import { graphql } from "gatsby"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers"

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

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityProject(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          title
          description
          demo
          images
          repository
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const classes = useStyles()

  let topRef = useRef(null)
  let skillsRef = useRef(null)
  let projectsRef = useRef(null)

  useEffect(() => {
    //only works with set timeout when coming from another page
    setTimeout(() => {
      if (parseInt(props.pageContext.section, 10) > 0) {
        scrollNext(props.pageContext.section, "auto")
      }
    }, 100)
  }, [])

  const { data, errors } = props

  const projects =
    data &&
    data.projects &&
    mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)

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
      <SEO title="Home" description="My Portfolio" />
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

export default IndexPage
