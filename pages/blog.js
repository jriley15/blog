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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
}))

const Blog = ({ query }) => {
  const classes = useStyles()

  return (
    <>
      <NavBar />
      <div className={classes.root}>Blog</div>
    </>
  )
}

export default Blog
