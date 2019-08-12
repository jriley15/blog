import React from "react"
import Head from "next/head"
import NavBar from "../components/Navbar"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography, Tabs, Tab, Box, Button } from "@material-ui/core"
import VerticalTabs from "../components/resume/VerticalTabs"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",

    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
    },
    backgroundColor: "#fafafa",
  },

  gridContainer: {
    //padding: theme.spacing(1),
  },

  topSection: {
    padding: theme.spacing(1),
    boxShadow: "inset 0 0 20px rgba(0,0,0,.5)",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    width: "100%",
    backgroundColor: theme.palette.background.default,
  },
  titleFont: {
    fontWeight: 100,
  },
}))
const Resume = () => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Resume | Jordan Portfolio</title>
        <meta name="description" content="My Resume" />
      </Head>
      <NavBar />
      <div className={classes.root}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <div className={classes.topSection}>
            <Typography
              align="center"
              variant="h3"
              className={classes.titleFont}
              gutterBottom
            >
              My Resume
            </Typography>
            <Typography color="textSecondary" align="center" gutterBottom>
              Try out the interactive web resume below or download the PDF
              document
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button variant="contained">Download PDF</Button>
            </Box>
          </div>
          <VerticalTabs />
        </Box>
      </div>
    </>
  )
}

export default Resume
