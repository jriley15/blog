import React from "react"
import SEO from "../components/seo"
import NavBar from "../components/Navbar"
import { classes, makeStyles } from "@material-ui/styles"
import { Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    //padding: theme.spacing(1),
    //background:
    //  "linear-gradient(rgba(120, 80, 228, 0.8), rgba(13, 186, 134, 0.8)), url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/JrbItQz/white-polygonal-geometric-surface-seamless-loop-4k-uhd-3840x2160_nyllfzz7e__F0000.png') no-repeat center",
    backgroundColor: "#FFFFFF",
    backgroundSize: "cover",
    position: "relative",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh",
  },
  topSection: {
    boxShadow: "inset 0 0 20px rgba(0,0,0,.5)",
    padding: theme.spacing(1),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: "#2b313c",
    marginTop: theme.spacing(8),
  },
}))

const Page = props => {
  const classes = useStyles()

  return (
    <>
      <SEO title={props.pageContext.title} />
      <NavBar />
      <div className={classes.root}>
        <Grid container className={classes.topSection} justify="center">
          <Grid item xs={12}>
            <Typography align="center" variant="h2" gutterBottom>
              {props.pageContext.title}
            </Typography>
          </Grid>

          <Grid item align="center" xs={12}>
            <Typography gutterBottom>
              {props.pageContext.description}
            </Typography>
          </Grid>
        </Grid>
        Test
      </div>
    </>
  )
}
export default Page
