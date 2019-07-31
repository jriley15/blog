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
} from "@material-ui/core"
import { getPosts } from "../data/blog"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    marginTop: theme.spacing(8),
  },
}))

const Blog = ({ posts }) => {
  const classes = useStyles()

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        {posts.map(post => (
          <>{post.fields.title}</>
        ))}
      </div>
    </>
  )
}

Blog.getInitialProps = async () => {
  return { posts: await getPosts() }
}

export default Blog
