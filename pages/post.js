import React, { useRef, useEffect } from "react"
import Link from "next/link"
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
  CardActionArea,
  Divider,
} from "@material-ui/core"
import { getPost } from "../data/blog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
//import js from "../node_modules/react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import style from "../node_modules/react-syntax-highlighter/dist/esm/styles/prism/vs-dark"
//SyntaxHighlighter.registerLanguage("javascript", js)

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    marginTop: theme.spacing(8),
  },
  grid: {
    width: "100%",
    //padding: theme.spacing(1),
    paddingTop: theme.spacing(3),
  },
  postContainer: {
    padding: theme.spacing(1),
    width: "100%",
    maxWidth: "800px",
  },
  post: {
    padding: theme.spacing(2),
    width: "100%",
  },
  previewImage: {
    maxHeight: "180px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  body: {
    paddingTop: theme.spacing(2),
  },
}))

const options = {
  renderMark: {
    //[MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: text => (
      <SyntaxHighlighter style={style} language="javascript">
        {text}
      </SyntaxHighlighter>
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

const Post = ({ post }) => {
  const classes = useStyles()

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Grid container className={classes.grid} justify="center">
          <Grid item key={post.id} className={classes.postContainer}>
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
                <Grid item xs={12}>
                  <Grid
                    container
                    alignContent="space-between"
                    className={classes.previewItem}
                  >
                    <Grid item xs={12}>
                      <Grid container justify="space-between">
                        <Typography variant="h4" gutterBottom>
                          {post.fields.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {new Date(post.sys.createdAt).toDateString()}
                        </Typography>
                      </Grid>
                      <Divider />
                      <div className={classes.body}>
                        {documentToReactComponents(post.fields.body, options)}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

Post.getInitialProps = async ({ query: { id } }) => {
  return { post: await getPost(id) }
}

export default Post
