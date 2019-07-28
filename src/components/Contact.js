import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Slide, Grid, Fab, Divider, Typography } from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"
import { makeStyles } from "@material-ui/core/styles"
import { grey, lightGreen, indigo } from "@material-ui/core/colors"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  linkedInIcon: {
    marginRight: theme.spacing(1),
    width: "20px",
  },

  emailButton: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(indigo[800]),
    backgroundColor: indigo[800],
    "&:hover": {
      backgroundColor: indigo[900],
    },
  },

  darkButton: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[800],
    },
  },
  discordIcon: {
    width: "30px",
    marginRight: theme.spacing(1),
  },
  discordButton: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(indigo["A200"]),
    backgroundColor: indigo["A200"],
    "&:hover": {
      backgroundColor: indigo["A700"],
    },
  },

  devpostButton: {
    margin: theme.spacing(1),
    color: "#FFF",
    backgroundColor: lightGreen["500"],
    "&:hover": {
      backgroundColor: lightGreen["700"],
    },
  },

  divider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}))

export default function Contact({ open, handleClose }) {
  const classes = useStyles()

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        TransitionComponent={Transition}
      >
        <DialogTitle id="form-dialog-title">Contact Me</DialogTitle>
        <DialogContent dividers>
          <DialogContentText align="center">
            Contact me through email or social media below
          </DialogContentText>

          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item>
              <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                color="primary"
                className={classes.emailButton}
              >
                <EmailIcon className={classes.extendedIcon} />
                Email: Jordanr3@live.com
              </Fab>
            </Grid>
            <Grid item>
              <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className={classes.darkButton}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jordan-riley-090564158/"
                  )
                }
              >
                <img
                  src="https://image.flaticon.com/icons/svg/174/174857.svg"
                  className={classes.linkedInIcon}
                />
                LinkedIn
              </Fab>
            </Grid>
            <Grid item>
              <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className={classes.margin}
                onClick={() => window.open("https://github.com/jriley15")}
              >
                <img
                  src="https://image.flaticon.com/icons/svg/25/25231.svg"
                  className={classes.linkedInIcon}
                />
                Github: jriley15
              </Fab>
            </Grid>
            <Grid item>
              <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className={classes.discordButton}
              >
                <img
                  src="https://discordapp.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"
                  className={classes.discordIcon}
                />
                Discord: JORDAN#8399
              </Fab>
            </Grid>
            <Grid item>
              <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className={classes.devpostButton}
                onClick={() => window.open("https://devpost.com/JordanRiley")}
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/dev-post-555431.png"
                  className={classes.discordIcon}
                />
                Devpost
              </Fab>
            </Grid>
          </Grid>

          <Divider className={classes.divider} variant="middle" />

          <Typography align="center" color="textSecondary">
            Or send me a message with the form below
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            multiline
            rows={5}
            autoFocus
            margin="dense"
            id="email"
            label="Message"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Send Message</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
