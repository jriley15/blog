import React, { useRef, useEffect } from "react"
import Link from "next/link"
import NavBar from "../components/Navbar"
import { makeStyles, fade } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  Fade,
  Zoom,
  Paper,
  Avatar,
  Slide,
  CardActionArea,
  Divider,
  ButtonBase,
  Box,
} from "@material-ui/core"
import { getPosts } from "../data/blog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "../node_modules/react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import style from "../node_modules/react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-blue"

SyntaxHighlighter.registerLanguage("javascript", js)

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
    borderLeft: "1px solid transparent",
    padding: theme.spacing(3),
    transition: theme.transitions.create("background-color"),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    cursor: "pointer",
  },

  titleFont: {
    fontWeight: 100,
  },

  previewImageAvatar: {
    //margin: 10,
    width: 100,
    height: 100,
    float: "left",
    marginRight: theme.spacing(2),
  },

  readMoreButton: {
    //bottom: 0,
    margin: theme.spacing(1),
  },
}))

const options = {
  renderMark: {
    //[MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: text => (
      <SyntaxHighlighter style={style}>{text}</SyntaxHighlighter>
    ),
  },
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
          {posts
            .sort((a, b) => {
              return new Date(b.sys.createdAt) - new Date(a.sys.createdAt)
            })
            .map((post, index) => (
              <Grid item className={classes.postGridItem} key={post.sys.id}>
                {index > 0 && <Divider variant="middle" />}
                <Link
                  href={{
                    pathname: `/post`,
                    query: { id: post.sys.id },
                  }}
                  as={`/post/${post.sys.id}`}
                >
                  <Paper elevation={6} className={classes.postPaper}>
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
                          <Grid item>
                            {post.fields.media && (
                              <Avatar
                                src={post.fields.media[0].fields.file.url}
                                className={classes.previewImageAvatar}
                                component="span"
                              />
                            )}
                          </Grid>
                          <Grid item xs>
                            <Typography>{post.fields.description}</Typography>
                            <Button
                              className={classes.readMoreButton}
                              style={{ float: "right" }}
                            >
                              Read More
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Link>
              </Grid>
            ))}
        </Grid>

        {/*<Grid container className={classes.grid} justify="center">
          <Grid item>
            <Grid container justify="center" direction="column">
              {posts.map(post => (
                <Grid item key={post.sys.id} className={classes.postContainer}>
                  <Paper
                    className={classes.post}
                    elevation={6}
                    onClick={() => {
                      console.log("goto blog post")
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      wrap="nowrap"
                      className={classes.previewContainer}
                      spacing={2}
                    >
                      <Grid item>
                        {post.fields.media && (
                          <img
                            src={post.fields.media[0].fields.file.url}
                            className={classes.previewImage}
                          />
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          alignContent="space-between"
                          className={classes.previewItem}
                        >
                          <Grid item xs={12}>
                            <Grid container justify="space-between">
                              <Typography variant="h5">
                                {post.fields.title}
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                {new Date(post.sys.createdAt).toDateString()}
                              </Typography>
                            </Grid>
                            <div className={classes.body}>
                              {documentToReactComponents(
                                post.fields.body,
                                options
                              )}
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container justify="flex-end">
                              <Link
                                href={{
                                  pathname: `/post`,
                                  query: { id: post.sys.id },
                                }}
                                as={`/post/${post.sys.id}`}
                              >
                                <Button className={classes.button}>
                                  Read More
                                </Button>
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Divider className={classes.divider} variant="middle" />
                </Grid>
              ))}
            </Grid>
          </Grid>
                              </Grid>*/}
      </div>
    </>
  )

  /*

<Paper className={classes.post} elevation={6}>
                <Grid
                  container
                  direction="row"
                  wrap="nowrap"
                  className={classes.previewContainer}
                  spacing={1}
                >
                  <Grid item>
                    {post.fields.media && (
                      <img
                        src={post.fields.media[0].fields.file.url}
                        className={classes.previewImage}
                      />
                    )}
                  </Grid>
                  <Grid item className={classes.content}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Grid container justify="space-between">
                          <Typography variant="h5">
                            {post.fields.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {new Date(post.sys.createdAt).toDateString()}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item style={{ maxHeight: 170, overflow: "hidden" }}>
                        {
                          documentToReactComponents(
                            post.fields.body,
                            options
                          )[0]
                        }
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
  */
}

Blog.getInitialProps = async () => {
  return { posts: await getPosts() }
}

export default Blog
