import React from "react"
import NavBar from "../components/Navbar"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography, Tabs, Tab, Box, Button } from "@material-ui/core"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",

    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
    },
    //backgroundColor: theme.palette.grey[200], //"#fafafa",
    //backgroundImage: "url('/static/images/interlaced.png')",

    minHeight: "calc(100vh - 168px)",
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

  desktopResume: {
    height: "1200px",
    minWidth: "818px",
    width: "100%",

    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  mobileResume: {
    height: "inherit",
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  downloadButtons: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))
const Resume = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Resume" description="My Resume" />

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
            <Box
              display="flex"
              justifyContent="center"
              className={classes.downloadButtons}
            >
              <Button
                variant="contained"
                className={classes.button}
                component="a"
                href="https://files.jrdn.tech/resume.pdf"
                download="Jordan Riley Resume 2019"
              >
                Download PDF
              </Button>
              <Button variant="contained" className={classes.button}>
                Download Word Doc
              </Button>
            </Box>
          </div>
          {/*<VerticalTabs />*/}
          <div className={classes.desktopResume}>
            <object
              data="https://files.jrdn.tech/Jordan+Riley+Resume+2019.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>

          <div className={classes.mobileResume}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Button
                variant="contained"
                style={{ marginTop: 16 }}
                onClick={() => {
                  window.open(
                    "https://files.jrdn.tech/Jordan+Riley+Resume+2019.pdf"
                  )
                }}
              >
                View PDF on Mobile
              </Button>
            </Box>
          </div>
        </Box>
      </div>
    </>
  )
}

export default Resume
