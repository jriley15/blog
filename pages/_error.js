import React from "react"
import { Button, Typography, Grid } from "@material-ui/core"
import Link from "next/link"
import { makeStyles } from "@material-ui/styles"
import NavBar from "../components/Navbar"

const useStyles = makeStyles(theme => ({
  root: {
    height: "calc(100vh - 104px)",
  },
  container: {
    height: "inherit",
  },
  paddingTop5: {
    padding: theme.spacing(5),
  },
  image: {
    width: "100%",
    maxWidth: "700px",
  },
}))

const error = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid
        container
        justify="center"
        className={classes.container}
        alignItems="center"
        alignContent="center"
        direction="column"
      >
        <Grid item>
          <img src="/static/images/notfound.svg" className={classes.image} />
        </Grid>
        <Grid item className={classes.paddingTop5}>
          <Typography variant="h2" align="center" gutterBottom>
            Page not found
          </Typography>
        </Grid>
        <Grid item>
          <Link href="/">
            <Button variant="outlined">Go To Home Page</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default error
