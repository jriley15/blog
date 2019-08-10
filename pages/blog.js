import React, { useRef, useEffect } from "react"
import Link from "next/link"
import NavBar from "../components/Navbar"
import { makeStyles, fade } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  Zoom,
  Paper,
  Avatar,
  Slide,
  CardActionArea,
  Divider,
  ButtonBase,
  Box,
  Link as MuiLink,
} from "@material-ui/core"
import { getPosts } from "../data/blog"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import Fade from "react-reveal/Fade"
import Head from "next/head"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",

    backgroundColor: theme.palette.background.paper,
  },

  postsGridContainer: {
    padding: theme.spacing(1),
  },

  postGridItem: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    width: "700px",
    maxWidth: "100%",
  },

  titleGridItem: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    width: "100%",
    boxShadow: "inset 0 0 20px rgba(0,0,0,.5)",
  },

  postPaper: {
    marginTop: theme.spacing(4),
    //borderLeft: "1px solid transparent",
    padding: theme.spacing(3),
    transition: theme.transitions.create("background-color"),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    cursor: "pointer",
    borderRadius: "3px",
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
    color: "white",
  },

  divider: {
    marginLeft: theme.spacing(4),

    marginRight: theme.spacing(4),
  },
}))

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Typography color="textSecondary">{children}</Typography>
    },
    [BLOCKS.HEADING_1]: (node, children) => (
      <Typography variant="h6">{children}</Typography>
    ),
  },
}

const Blog = ({ posts }) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Blog | Jordan Portfolio</title>
      </Head>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.titleGridItem}>
          <Typography
            align="center"
            variant="h3"
            className={classes.titleFont}
            gutterBottom
          >
            Welcome to my blog
          </Typography>
          <Typography align="center" color="textSecondary">
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
          {posts
            .sort((a, b) => {
              return new Date(b.sys.updatedAt) - new Date(a.sys.updatedAt)
            })
            .map((post, index) => (
              <Grid item className={classes.postGridItem} key={post.sys.id}>
                {index > 0 && (
                  <Divider variant="middle" className={classes.divider} />
                )}
                <Fade>
                  <Link
                    href={{
                      pathname: `/post`,
                      query: { id: post.sys.id },
                    }}
                    as={`/post/${post.sys.id}`}
                  >
                    <div elevation={6} className={classes.postPaper}>
                      <Grid
                        container
                        justify="flex-start"
                        direction="column"
                        spacing={2}
                      >
                        <Grid item>
                          <Grid container alignItems="center">
                            <Grid item xs>
                              <Typography
                                variant="h4"
                                className={classes.titleFont}
                                gutterBottom
                              >
                                {post.fields.title}
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                {new Date(post.sys.createdAt).toDateString()}
                              </Typography>
                              <Typography color="textSecondary">
                                {post.fields.description}
                                <MuiLink className={classes.readMoreButton}>
                                  {" "}
                                  Read More
                                </MuiLink>
                              </Typography>
                            </Grid>
                            <Grid item>
                              {post.fields.media && (
                                <div className={classes.previewImageAvatar}>
                                  <img
                                    src={post.fields.media[0].fields.file.url}
                                    style={{ height: "100%" }}
                                  />
                                </div>
                              )}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Link>
                </Fade>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  )
}

Blog.getInitialProps = async () => {
  return { posts: await getPosts() }
}

export default Blog
