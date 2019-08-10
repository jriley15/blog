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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
    marginTop: theme.spacing(10),
  },

  postsGridContainer: {},

  postGridItem: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    width: "700px",
    maxWidth: "100%",
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
    width: 220,
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
      <NavBar />
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          className={classes.postsGridContainer}
          direction="column"
          alignItems="center"
        >
          <Grid item className={classes.postGridItem}>
            <Typography
              align="center"
              variant="h4"
              className={classes.titleFont}
              gutterBottom
            >
              My Blog
            </Typography>
            <Typography align="center" color="textSecondary">
              Various posts about tech and my life.
            </Typography>
          </Grid>
          {posts
            .sort((a, b) => {
              return new Date(b.sys.createdAt) - new Date(a.sys.createdAt)
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
                          <Grid container justify="space-between">
                            <Typography
                              variant="h4"
                              className={classes.titleFont}
                            >
                              {post.fields.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {new Date(post.sys.createdAt).toDateString()}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container alignItems="center">
                            <Grid item xs>
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
