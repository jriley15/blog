import React from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Button, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  footer: {
    maxWidth: "840px",
  },
  paddingTop: {
    paddingTop: theme.spacing(2),
  },
  footerLink: {
    textDecoration: "underline",

    "&:hover": {
      color: "grey",

      cursor: "pointer",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container justify="center" direction="column">
        <Grid item>
          <Grid container justify="center">
            <Grid
              container
              justify="center"
              spacing={4}
              className={classes.footer}
            >
              {/*<Grid item>
                <Link href="/">
                  <Typography className={classes.footerLink}>Home</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/">
                  <Typography className={classes.footerLink}>About</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/">
                  <Typography className={classes.footerLink}>
                    Projects
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/">
                  <Typography className={classes.footerLink}>Resume</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/">
                  <Typography className={classes.footerLink}>Blog</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/">
                  <Typography className={classes.footerLink}>
                    Contact
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/">
                  <Typography className={classes.footerLink}>Github</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/">
                  <Typography className={classes.footerLink}>
                    LinkedIn
                  </Typography>
                </Link>
              </Grid>*/}
            </Grid>
          </Grid>

          <Grid item className={classes.paddingTop}>
            <Grid container justify="center">
              <Grid item>
                <Typography>© 2019 Jordan Riley</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
