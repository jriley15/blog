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
import { getPost, urlFor } from "../data/blog"
import BlockContent from "@sanity/block-content-to-react"
import Head from "next/head"
import serializers from "../components/common/serializers"

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

const Post = ({ post }) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
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
                  {post.title}
                </Typography>
                <Typography variant="body1" className={classes.textSecondary}>
                  {new Date(post._createdAt).toDateString()}
                </Typography>
              </Grid>
              <Typography className={classes.textSecondary}>
                {post.description}
              </Typography>
              <Divider className={classes.divider} />

              <div className={classes.body}>
                <BlockContent blocks={post.body} serializers={serializers} />
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
