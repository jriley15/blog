import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import NavBar from "../components/NavBar"
import { makeStyles, fade } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Paper,
  Link as MuiLink,
  Divider,
} from "@material-ui/core"
import Fade from "react-reveal/Fade"
import SEO from "../components/seo"
import Transition from "react-transition-group/Transition"
import ButtonBaseLink from "../components/common/ButtonBaseLink"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers"
import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    //test
    backgroundColor: "#2b313c",
    //backgroundImage: "url('/static/images/interlaced.png')",
    color: theme.palette.common.black,
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
    },
  },

  postsGridContainer: {
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(8),
  },

  postGridItem: {
    [theme.breakpoints.up("sm")]: {
      //paddingTop: theme.spacing(2),
    },
    paddingBottom: theme.spacing(2),

    width: "700px",
    maxWidth: "100%",

    "&:hover": {
      //transform: "scale(1.1)",
    },

    transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "scale(1, 1)",
  },

  titleGridItem: {
    paddingTop: theme.spacing(3),
    //paddingBottom: theme.spacing(3),
    backgroundColor: "#2b313c",
    width: "100%",
    //boxShadow: "inset 0 0 20px rgba(0,0,0,.5)",
    color: theme.palette.common.white,
  },

  textSecondary: {
    //color: "rgba(0, 0, 0, 0.54)",
  },

  postButton: {
    color: "white",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4),
    },
    //borderLeft: "1px solid transparent",
    padding: theme.spacing(3),
    transition: theme.transitions.create("background-color"),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    cursor: "pointer",
    borderRadius: "3px",
    backgroundColor: "rgba(255,255,255, 0.1)",
    //color: "black",
  },

  titleFont: {
    fontWeight: 100,
  },

  previewImageAvatar: {
    //margin: 10,
    width: 230,
    height: 150,
    marginLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "3px",
  },

  readMoreButton: {
    //bottom: 0,
    //margin: theme.spacing(1),
    //color: "white",
  },

  divider: {
    marginLeft: theme.spacing(4),

    marginRight: theme.spacing(4),
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },
}))

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          _rawBody
          id
          title
          description
          previewImage
          publishedAt
          slug {
            current
          }
        }
      }
    }
  }
`

const Blog = props => {
  const classes = useStyles()
  const { data, errors } = props
  const posts =
    data &&
    data.posts &&
    mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)

  const duration = 500

  const defaultStyle = {
    transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    opacity: 0,
    transform: "scale(0)",
    willChange: "transform",
  }

  const transitionStyles = {
    entering: { opacity: 0, transform: "scale(0)" },
    entered: { opacity: 1, transform: "scale(1, 1)" },
  }

  return (
    <Layout>
      <SEO title="Blog" description="My Personal Blog" />

      <NavBar />
      <div className={classes.root}>
        <div className={classes.titleGridItem}>
          <Typography
            align="center"
            variant="h3"
            className={classes.titleFont}
            gutterBottom
          >
            Welcome to my Blog
          </Typography>
          <Typography align="center" color="textSecondary" gutterBottom>
            Various posts about tech and my life.
          </Typography>
        </div>

        <Grid
          container
          justify="center"
          className={classes.postsGridContainer}
          direction="column"
          alignItems="center"
        >
          {posts.map((post, index) => (
            <Grid item className={classes.postGridItem} key={post.id}>
              {index === 0 && <Divider variant="middle" />}
              <Transition key={index} in={true} appear={true} timeout={0}>
                {state => (
                  <div
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                      transitionDelay: (index - 1) * 125 + "ms",
                    }}
                  >
                    <ButtonBaseLink
                      to={`/post/${post.slug.current}`}
                      className={classes.postButton}
                    >
                      <Grid container alignItems="center">
                        <Grid item xs>
                          <Typography
                            variant="h4"
                            className={classes.titleFont}
                            gutterBottom
                            align="left"
                          >
                            {post.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            gutterBottom
                            className={classes.textSecondary}
                            color="textSecondary"
                            align="left"
                          >
                            {new Date(post.publishedAt).toDateString()}
                          </Typography>
                          <Typography align="left">
                            {post.description}
                            <MuiLink className={classes.readMoreButton}>
                              {" "}
                              Read More
                            </MuiLink>
                          </Typography>
                        </Grid>
                        <Grid item>
                          {post.previewImage && (
                            <div className={classes.previewImageAvatar}>
                              <img
                                src={post.previewImage}
                                style={{ height: "100%" }}
                                alt="preview"
                              />
                            </div>
                          )}
                        </Grid>
                      </Grid>
                    </ButtonBaseLink>
                  </div>
                )}
              </Transition>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export default Blog
