import React from "react"
import Head from "next/head"
import NavBar from "../components/Navbar"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",

    marginTop: theme.spacing(8),
  },

  gridContainer: {
    padding: theme.spacing(1),
  },
}))
const Resume = () => {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>Resume | Jordan Portfolio</title>
      </Head>
      <NavBar />
      <div className={classes.root}>
        <Grid container justify="center" className={classes.gridContainer}>
          <Grid item>
            <Typography>Coming soon</Typography>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Resume
