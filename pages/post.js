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
  Box,
} from "@material-ui/core"
import { getPost } from "../data/blog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
//import js from "../node_modules/react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import style from "../node_modules/react-syntax-highlighter/dist/esm/styles/prism/vs-dark"
import Head from "next/head"
//SyntaxHighlighter.registerLanguage("javascript", js)

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
    },
    //backgroundColor: theme.palette.common.white,
    backgroundColor: theme.palette.grey[200], //"#fafafa",
    backgroundImage: "url('/static/images/interlaced.png')",
    minHeight: "calc(100vh - 168px)",
    color: theme.palette.common.black,
  },

  postsGridContainer: {},

  postGridItem: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    width: "700px",
    maxWidth: "100%",
  },

  postPaper: {
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4),
    },
    marginBottom: theme.spacing(4),
    borderLeft: "1px solid transparent",
    padding: theme.spacing(3),
    backgroundColor: "#fafafa",
    color: theme.palette.common.black,
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
  divider: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },

  textSecondary: {
    color: "rgba(0, 0, 0, 0.54)",
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
      return (
        <Typography
          style={
            {
              /* color: "rgba(0, 0, 0, 0.54)" */
            }
          }
        >
          {children}
        </Typography>
      )
    },
    [BLOCKS.HEADING_1]: (node, children) => (
      <Typography variant="h5">{children}</Typography>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Typography
        variant="h5"
        component="h2"
        style={{
          marginBlockStart: "1em",
          marginBlockEnd: "1em",
          fontWeight: 400,
        }}
      >
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Typography
        variant="h6"
        component="h3"
        style={{
          marginBlockStart: "1em",
          marginBlockEnd: "1em",
          fontWeight: 400,
        }}
      >
        {children}
      </Typography>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      //console.log("asset: ", node)
      return (
        <Box display="flex" justifyContent="center" style={{ width: "100%" }}>
          <img
            src={node.data.target.fields.file.url}
            style={{ maxWidth: "250px", margin: 8 }}
          />
        </Box>
      )
    },
  },
}

const Post = ({ post }) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>{post.fields.title}</title>
        <meta name="description" content={post.fields.description} />
      </Head>
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
            <Paper elevation={6} className={classes.postPaper}>
              <Grid container justify="space-between">
                <Typography
                  variant="h3"
                  className={classes.titleFont}
                  gutterBottom
                >
                  {post.fields.title}
                </Typography>
                <Typography variant="body1" className={classes.textSecondary}>
                  {new Date(post.sys.createdAt).toDateString()}
                </Typography>
              </Grid>
              <Typography className={classes.textSecondary}>
                {post.fields.description}
              </Typography>
              <Divider className={classes.divider} />

              <div className={classes.body}>
                {documentToReactComponents(post.fields.body, options)}
              </div>
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
