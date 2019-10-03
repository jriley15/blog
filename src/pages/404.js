import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Typography, Grid } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/styles"
import NavBar from "../components/NavBar"

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

const NotFoundPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          className={classes.container}
          alignItems="center"
          alignContent="center"
          direction="column"
        >
          <Grid item>
            <img
              src="https://images.jrdn.tech/notfound.svg"
              className={classes.image}
            />
          </Grid>
          <Grid item className={classes.paddingTop5}>
            <Typography variant="h2" align="center" gutterBottom>
              Page not found
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button variant="outlined">Go To Home Page</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default NotFoundPage
