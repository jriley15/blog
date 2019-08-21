import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Button,
  Fade,
  Avatar,
  Fab,
  ButtonGroup,
  Box,
} from "@material-ui/core"
import DownArrow from "@material-ui/icons/KeyboardArrowDown"
import ButtonLink from "./common/ButtonLink"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },

  topSection: {
    width: "100%",
    height: "100vh", //"55vh",
    overflowX: "hidden",
    //backgroundColor: theme.palette.primary.main,
    //https://digileaders.com/wp-content/uploads/2018/09/coding-on-laptop_4460x4460-e1537450504196.jpg
    //https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/JrbItQz/white-polygonal-geometric-surface-seamless-loop-4k-uhd-3840x2160_nyllfzz7e__F0000.png

    /*background:
      "linear-gradient(rgba(120, 80, 228, 0.8), rgba(13, 186, 134, 0.8)), url('https://images.jrdn.tech/bg2.jpg') no-repeat center",
    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      backgroundAttachment: "fixed",
    },*/
  },

  svg: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "7vh",
    //backgroundColor: theme.palette.background.default,
  },

  buttonGroup: {
    marginTop: theme.spacing(4),
    //maxWidth: "100%",
  },

  greeting: {
    height: "100%",
    marginBottom: "13vw",
    //paddingTop: theme.spacing(8),
  },

  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },

  container: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
  },

  arrowBox: {
    zIndex: theme.zIndex.appBar - 1,
    width: "100%",
  },
  scrollArrow: {
    bottom: "5vw",
    position: "absolute",
    animation: "bounce .3s infinite alternate",
    animationName: "$bounce",
    animationDelay: "2s",

    "&:hover": {
      animation: "none",
    },
  },

  "@keyframes bounce": {
    "0%": {
      transform: "translate(0px, 0px)",
    },
    "100%": {
      transform: "translate(0px, 10px)",
    },
  },

  icon: {
    width: "24px",
  },
}))

const TopSection = ({ scrollNext, children }) => {
  const classes = useStyles()

  const vantaBackground = useRef(null)

  const [reRender, setReRender] = useState(0)

  const checkScripts = () => {
    if (window.VANTA && window.VANTA.NET) {
      return window.VANTA.NET({
        el: vantaBackground.current,
        color: "rgb(120, 80, 228)",
        backgroundColor: "#2b313c",
      })
    }
    return null
  }

  //hacky way to wait until 3jsscript  loads to start drawing the animated background
  useEffect(() => {
    let effect = checkScripts()
    let interval = null

    if (!effect) {
      interval = setInterval(() => {
        effect = checkScripts()
        if (effect) {
          clearInterval(interval)
        }
        console.log("checking scripts")
      }, 10)
    }

    return () => {
      if (effect) effect.destroy()
      clearInterval(interval)
    }
  }, [])

  return (
    <Grid item className={classes.topSection} ref={vantaBackground}>
      {children}
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item>
          <div className={classes.greeting}>
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <Avatar
                  alt="Me"
                  src="https://images.jrdn.tech/me.jpg"
                  className={classes.bigAvatar}
                />
              </Grid>
              <Grid>
                <Typography variant="h2" align="center">
                  Hello, I'm Jordan Riley
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" align="center" color="textSecondary">
              A software developer / student based in Phoenix, Arizona.
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonGroup}
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <ButtonGroup size="large">
                  {/*<Button
                    variant="outlined"
                    onClick={() => window.open("https://github.com/jriley15")}
                  >
                    Github
                  </Button>*/}

                  <Button variant="outlined" onClick={() => scrollNext(2)}>
                    Projects
                  </Button>

                  <ButtonLink
                    variant="outlined"
                    href={{
                      pathname: `/post`,
                      query: { id: "600070f0-79bb-4c98-80f5-c982f46f36bc" },
                    }}
                    as={`/about`}
                  >
                    About Me
                  </ButtonLink>
                </ButtonGroup>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        position="absolute"
        className={classes.arrowBox}
      >
        <Fab
          size="small"
          color="primary"
          aria-label="Next"
          color="default"
          className={classes.scrollArrow}
          onClick={() => scrollNext(1)}
        >
          <DownArrow fontSize="large" />
        </Fab>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={classes.svg}
        preserveAspectRatio="none"
      >
        <path
          d="M 0 0 L 0 100 L 50 100 M 50 100 L 100 0 l 100 100"
          fill="rgb(27, 28, 29)"
        />
      </svg>
    </Grid>
  )
}

export default TopSection
