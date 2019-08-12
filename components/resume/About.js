import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  titleFont: {
    fontWeight: 100,
  },
  textSecondary: {
    color: "rgba(0, 0, 0, 0.54)",
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <>
      <Typography
        align="center"
        variant="h3"
        className={classes.titleFont}
        gutterBottom
      >
        Jordan Riley
      </Typography>
      <Typography className={classes.textSecondary} align="center">
        Phoenix, Arizona
      </Typography>
      <Typography>
        A young and motivated full stack software developer / student looking to
        make an impact in the industry. I have a year and a half of professional
        experience in software development and graduate in December 2019.
      </Typography>
    </>
  )
}
