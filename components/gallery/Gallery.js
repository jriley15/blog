import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import LeftArrow from "@material-ui/icons/KeyboardArrowLeftOutlined"
import RightArrow from "@material-ui/icons/KeyboardArrowRightOutlined"
import Close from "@material-ui/icons/CloseOutlined"
import Modal from "@material-ui/core/Modal"
import Fab from "@material-ui/core/Fab"

const styles = theme => ({
  grid: {
    width: "100vw",
    position: "absolute",

    "&:focus": {
      outline: "none",
    },
  },
  margin: {
    margin: theme.spacing.unit,
  },

  leftArrow: {
    position: "absolute",
    left: theme.spacing.unit,
    opacity: "0.5",
  },
  rightArrow: {
    position: "absolute",
    right: theme.spacing.unit,
    opacity: "0.5",
  },

  close: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit,
  },
})

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      test: 1,
      translateX: 0,
      translateBy: 0,
      images: props.images,
      mobile: false,
      index: 0,
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 37:
        this.prev()
        break

      case 39:
        this.next()
        break

      case 27:
        this.handleClose()
        break
      default:
        break
    }
  }

  handleClose = () => {
    this.setState({ index: 0 })
    this.props.close()
  }

  next = () => {
    if (this.props.selected + this.state.index + 1 < this.props.images.length) {
      this.setState({ index: this.state.index + 1 })
    }
  }

  prev = () => {
    if (this.props.selected + this.state.index > 0) {
      this.setState({ index: this.state.index - 1 })
    }
  }

  render() {
    const { classes, selected, open } = this.props
    const { images, index } = this.state

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={this.handleClose}
      >
        <>
          <Fab
            size="small"
            aria-label="Left"
            className={classes.close}
            onClick={this.handleClose}
          >
            <Close fontSize="large" />
          </Fab>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={getModalStyle()}
            className={classes.grid}
          >
            <Fab
              size="small"
              aria-label="Left"
              className={classes.leftArrow}
              onClick={this.prev}
            >
              <LeftArrow fontSize="large" />
            </Fab>

            <img
              src={images[selected + index]}
              style={{ maxWidth: "100%" }}
              onClick={this.handleClose}
              alt="project image"
            />

            <Fab
              size="small"
              aria-label="Left"
              className={classes.rightArrow}
              onClick={this.next}
            >
              <RightArrow fontSize="large" />
            </Fab>

            <Fab
              size="small"
              aria-label="Left"
              className={classes.rightArrow}
              onClick={this.next}
            >
              <RightArrow fontSize="large" />
            </Fab>
          </Grid>
        </>
      </Modal>
    )
  }
}

export default withStyles(styles)(Gallery)
