import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import LeftArrow from "@material-ui/icons/KeyboardArrowLeftOutlined"
import RightArrow from "@material-ui/icons/KeyboardArrowRightOutlined"
import IconButton from "@material-ui/core/IconButton"
import Dot from "@material-ui/icons/FiberManualRecord"
import Gallery from "./Gallery"

const styles = theme => ({
  sliderContainer: {
    maxWidth: 700,
  },

  image: {
    maxHeight: "250px",

    transition: "transform .2s",

    "&:hover": {
      transform: "scale(1.5)",
    },
  },

  arrow: {
    color: "white",
  },

  slideContainer: {
    overflow: "hidden",
  },

  dotUnselected: {
    fill: "grey",
    width: "12px",
    "&:hover": {
      fill: "black",
    },
  },

  dotSelected: {
    fill: "white",
    width: "12px",
  },
})

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      test: 1,
      translateX: 0,
      translateBy: 0,
      images: props.images,
      imageWidth: 100,
      max: 0,
      modal: false,
      selectedImage: 0,
    }

    this.autoScrollInterval = setInterval(this.autoScroll, 5000)
  }

  autoScroll = () => {
    this.autoScrollRight()
  }

  componentWillUnmount() {
    clearInterval(this.autoScrollInterval)
    window.removeEventListener("resize", this.updateTranslation)
  }

  updateTranslation = () => {
    this.setState({ translateX: 0 })

    let width = 200

    let arrowSize = 67
    let imageCount = Math.floor(
      (window.innerWidth - 32 - arrowSize * 2) / (width + 8)
    )

    if (imageCount > this.state.images.length) {
      imageCount = this.state.images.length
    }

    this.setState({
      translateBy: (width + 8) * imageCount,
      max: imageCount,
      imageWidth: width,
    })

    /*if (window.innerWidth <= 600) {
            this.setState({translateBy: width + 8, max: 1, imageWidth: width});
        } else if (window.innerWidth > 600 && window.innerWidth <= 800) {
            this.setState({translateBy: (width + 8) * 2, max: 2, imageWidth: width});
        } else if (window.innerWidth > 800 && window.innerWidth <= 1000) {
            this.setState({translateBy: (width + 8) * 3 , max: 3, imageWidth: width});
        } else if (window.innerWidth > 1000 ) {
            this.setState({translateBy: (width + 8) * 4 , max: 5, imageWidth: width});
        }*/
  }

  autoScrollRight = () => {
    this.doRightScroll()
  }

  doRightScroll = () => {
    if (
      this.state.translateX >
      -Math.ceil(this.state.images.length / this.state.max) + 1
    )
      this.setState({ translateX: this.state.translateX - 1 })
    else this.setState({ translateX: 0 })
  }

  scrollRight = () => {
    this.doRightScroll()
    clearInterval(this.autoScrollInterval)
    this.autoScrollInterval = setInterval(this.autoScroll, 5000)
  }

  scrollLeft = () => {
    if (this.state.translateX < 0)
      this.setState({ translateX: this.state.translateX + 1 })
    else
      this.setState({
        translateX: -Math.ceil(this.state.images.length / this.state.max) + 1,
      })

    clearInterval(this.autoScrollInterval)
    this.autoScrollInterval = setInterval(this.autoScroll, 5000)
  }

  dots = () => {
    const frameCount = Math.ceil(this.state.images.length / this.state.max)
    const { classes } = this.props

    let dots = []

    if (this.state.images.length > 0 && this.state.max > 0) {
      for (let i = 0; i < frameCount; i++) {
        if (this.state.translateX * -1 == i)
          dots.push(
            <Grid item key={i}>
              <Dot className={classes.dotSelected} />
            </Grid>
          )
        else
          dots.push(
            <Grid item key={i}>
              <Dot
                className={classes.dotUnselected}
                onClick={() => {
                  this.setState({ translateX: i * -1 })
                }}
              />
            </Grid>
          )
      }
    }

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        {dots}
      </Grid>
    )
  }

  handleClose = () => {
    this.setState({ modal: false })
  }

  componentDidMount() {
    this.updateTranslation()

    window.addEventListener("resize", this.updateTranslation)
  }

  openGallery = id => {
    this.setState({ modal: true, selectedImage: id })
  }

  close = id => {
    this.setState({ modal: false })
  }

  render() {
    const { classes } = this.props
    const { images } = this.state

    return (
      <>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
          spacing={1}
        >
          <Grid item className={classes.sliderContainer}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
              wrap="nowrap"
            >
              <Grid item>
                <IconButton
                  aria-label="Left"
                  className={classes.arrow}
                  onClick={this.scrollLeft}
                >
                  <LeftArrow fontSize="large" />
                </IconButton>
              </Grid>
              <Grid
                item
                className={classes.slideContainer}
                style={{ width: this.state.translateBy }}
              >
                <div
                  style={{
                    transform: `translateX(${this.state.translateX *
                      this.state.translateBy}px)`,
                    transition: "transform ease-in-out 0.45s",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    style={{ flexWrap: "nowrap" }}
                    alignItems="center"
                    spacing={1}
                  >
                    {images.map((image, index) => (
                      <Grid item key={index}>
                        <img
                          src={image}
                          className={classes.image}
                          style={{ width: this.state.imageWidth }}
                          onClick={() => this.openGallery(index)}
                          alt="project image"
                        />
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </Grid>

              <Grid item>
                <IconButton
                  aria-label="Right"
                  className={classes.arrow}
                  onClick={this.scrollRight}
                >
                  <RightArrow fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>{this.dots()}</Grid>
        </Grid>

        <Gallery
          images={this.state.images}
          open={this.state.modal}
          selected={this.state.selectedImage}
          close={this.close}
        />
      </>
    )
  }
}

export default withStyles(styles)(Carousel)
