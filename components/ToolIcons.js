import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "300px",
  },
  icon: {
    width: 100,
    height: 100,
  },
}))

const ToolIcons = () => {
  const classes = useStyles()

  return (
    <Fade>
      <Grid container className={classes.root} spacing={1} justify="center">
        <Grid item className={classes.icon}>
          <svg viewBox="0 0 128 128">
            <path
              fill="#31251C"
              d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zM98.983 46.786c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997v-14.627c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929h-14.182v-.001zM126.42 74.756c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011v-13.035c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"
            />
            <path
              fill="#F34F29"
              d="M52.7 61.7l-22.749-22.748c-1.309-1.31-3.434-1.31-4.744 0l-4.724 4.724 5.991 5.992c1.394-.47 2.99-.155 4.1.956 1.116 1.117 1.429 2.727.947 4.125l5.775 5.775c1.396-.481 3.009-.17 4.125.947 1.56 1.559 1.56 4.086 0 5.646-1.561 1.56-4.087 1.56-5.647 0-1.173-1.174-1.463-2.897-.869-4.342l-5.386-5.386-.001 14.174c.381.188.739.438 1.056.754 1.56 1.559 1.56 4.085 0 5.647-1.56 1.559-4.088 1.559-5.646 0-1.56-1.562-1.56-4.088 0-5.647.386-.385.831-.676 1.307-.871v-14.305c-.476-.194-.921-.484-1.307-.871-1.182-1.181-1.466-2.914-.86-4.365l-5.906-5.908-15.599 15.598c-1.311 1.311-1.311 3.436 0 4.747l22.749 22.748c1.31 1.31 3.434 1.31 4.746 0l22.642-22.644c1.311-1.31 1.311-3.436 0-4.746z"
            />
            <path fill="none" d="M1.58 37.928h124.84v52.143h-124.84z" />
          </svg>
        </Grid>
        <Grid item className={classes.icon}>
          <svg viewBox="0 0 128 128">
            <path
              fill="#DCDDDE"
              stroke="#D9D9D9"
              strokeWidth="0.5956"
              d="M126.8,61.4c-10.2-1.4-47.7-3.3-64.4-6 c-13.5-2.2-26.6-6.2-39.2-10.4c-3.2-1.1-9-3.3-12.7-5.3c-2.3-1.8-7.9-4.4-9.5-6.9c24.3,11.6,34.1,14.7,62.7,20.5 C75.3,55.6,117.4,59,126.8,61.4L126.8,61.4z"
            />
            <path
              fill="#231F20"
              stroke="#231F20"
              strokeWidth="0.5956"
              d="M126.8,58.7c-10.2-1.4-47.7-3.3-64.4-6 c-13.5-2.2-26.6-6.2-39.2-10.4c-3.2-1.1-9-3.3-12.7-5.3c-2.3-1.8-7.9-4.4-9.5-6.9c24.3,11.6,34.1,14.7,62.7,20.5 C75.4,52.9,117.5,56.3,126.8,58.7L126.8,58.7z"
            />
            <path
              fill="#231F20"
              d="M28.3,91.4h-5.4l-1.4-4.1H14l-1.4,4.1H7.4l7.4-20.2h6L28.3,91.4z M20.2,83.6l-2.5-7.2l-2.5,7.2H20.2z"
            />
            <path
              fill="#231F20"
              d="M46.7,83.6c0,1.3-0.2,2.4-0.6,3.4c-0.4,1-0.9,1.9-1.5,2.5c-0.6,0.7-1.4,1.2-2.2,1.6 c-0.8,0.4-1.7,0.5-2.6,0.5c-0.9,0-1.6-0.1-2.2-0.3c-0.6-0.2-1.2-0.4-1.9-0.8v6.3h-4.9V76.2h4.9v1.6c0.7-0.6,1.5-1.1,2.3-1.4 c0.8-0.4,1.7-0.6,2.7-0.6c1.9,0,3.4,0.7,4.4,2.1C46.2,79.2,46.7,81.1,46.7,83.6z M41.7,83.7c0-1.5-0.3-2.5-0.8-3.2 c-0.5-0.7-1.3-1-2.4-1c-0.5,0-0.9,0.1-1.4,0.2c-0.5,0.1-0.9,0.3-1.4,0.6v7.6c0.3,0.1,0.7,0.2,1,0.2c0.4,0,0.7,0.1,1.1,0.1 c1.3,0,2.2-0.4,2.9-1.1C41.4,86.3,41.7,85.2,41.7,83.7z"
            />
            <path
              fill="#231F20"
              d="M59.5,89.8c-0.3,0.2-0.6,0.4-1,0.7c-0.4,0.3-0.8,0.5-1.1,0.7c-0.5,0.2-1,0.4-1.5,0.5 c-0.5,0.1-1.1,0.2-1.7,0.2c-1.4,0-2.7-0.4-3.6-1.3c-1-0.9-1.5-2-1.5-3.4c0-1.1,0.2-2,0.7-2.7c0.5-0.7,1.2-1.3,2.1-1.7 c0.9-0.4,2-0.7,3.4-0.9c1.3-0.2,2.7-0.3,4.2-0.4v-0.1c0-0.8-0.3-1.4-1-1.7s-1.7-0.5-3-0.5c-0.8,0-1.7,0.1-2.6,0.4 c-0.9,0.3-1.6,0.5-2,0.7h-0.4v-3.7c0.5-0.1,1.4-0.3,2.5-0.5c1.2-0.2,2.3-0.3,3.5-0.3c2.8,0,4.8,0.4,6,1.3s1.8,2.2,1.8,4v10.3h-4.8 V89.8z M59.5,87.4v-3.2c-0.7,0.1-1.4,0.1-2.1,0.2c-0.8,0.1-1.3,0.2-1.7,0.3c-0.5,0.2-0.9,0.4-1.1,0.7c-0.3,0.3-0.4,0.7-0.4,1.2 c0,0.3,0,0.6,0.1,0.8c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.2,0.5,0.3,0.7,0.4c0.3,0.1,0.7,0.1,1.4,0.1c0.5,0,1-0.1,1.5-0.3 C58.6,88,59.1,87.7,59.5,87.4z"
            />
            <path
              fill="#231F20"
              d="M76.7,91.8c-1.3,0-2.5-0.2-3.6-0.5c-1.1-0.3-2-0.8-2.9-1.5c-0.8-0.7-1.4-1.5-1.9-2.5 c-0.4-1-0.7-2.2-0.7-3.5c0-1.4,0.2-2.6,0.7-3.7s1.1-1.9,2-2.6c0.8-0.6,1.8-1.1,2.8-1.4c1.1-0.3,2.2-0.4,3.3-0.4c1,0,2,0.1,2.9,0.3 c0.9,0.2,1.7,0.5,2.4,0.9v4.2h-0.7c-0.2-0.2-0.4-0.4-0.7-0.6c-0.3-0.2-0.6-0.4-1-0.6c-0.4-0.2-0.8-0.4-1.2-0.5 c-0.4-0.1-1-0.2-1.5-0.2c-1.3,0-2.3,0.4-3,1.2c-0.7,0.8-1,1.9-1,3.4c0,1.5,0.4,2.6,1.1,3.3c0.7,0.8,1.7,1.1,3,1.1 c0.6,0,1.2-0.1,1.7-0.2c0.5-0.1,0.9-0.3,1.2-0.5c0.3-0.2,0.6-0.4,0.8-0.6c0.2-0.2,0.5-0.4,0.6-0.6h0.7v4.2 c-0.8,0.4-1.6,0.6-2.4,0.9C78.6,91.7,77.7,91.8,76.7,91.8z"
            />
            <path
              fill="#231F20"
              d="M100.3,91.4h-4.9v-7.5c0-0.6,0-1.2-0.1-1.8s-0.2-1.1-0.3-1.3c-0.2-0.3-0.4-0.6-0.8-0.7 c-0.3-0.2-0.8-0.2-1.5-0.2c-0.4,0-0.9,0.1-1.3,0.2C91,80,90.5,80.3,90,80.6v10.8h-4.9V70.3H90v7.5c0.9-0.7,1.7-1.2,2.5-1.6 c0.8-0.4,1.7-0.5,2.7-0.5c1.6,0,2.9,0.5,3.8,1.4c0.9,1,1.4,2.4,1.4,4.3V91.4z"
            />
            <path
              fill="#231F20"
              d="M119.8,84.7h-11.2c0.1,1.2,0.5,2.1,1.4,2.7c0.8,0.6,2.1,0.9,3.7,0.9c1,0,2-0.2,3-0.6 c1-0.4,1.7-0.8,2.3-1.2h0.5v3.9c-1.1,0.4-2.1,0.8-3.1,1c-1,0.2-2.1,0.3-3.2,0.3c-3,0-5.4-0.7-7-2.1c-1.6-1.4-2.4-3.3-2.4-5.9 c0-2.5,0.8-4.5,2.3-6c1.5-1.5,3.6-2.2,6.3-2.2c2.5,0,4.3,0.6,5.6,1.9c1.2,1.2,1.9,3,1.9,5.4V84.7z M115,81.8c0-1-0.3-1.8-0.8-2.3 c-0.5-0.5-1.2-0.8-2.2-0.8c-0.9,0-1.7,0.2-2.3,0.7c-0.6,0.5-0.9,1.3-1,2.3H115z"
            />
          </svg>
        </Grid>
        <Grid item className={classes.icon}>
          <svg viewBox="0 0 128 128">
            <path d="M24.5 50.5c-1.5 0-2.5 1.2-2.5 2.7v14.1l-15.9-16c-.8-.8-2.2-1-3.2-.6s-1.9 1.4-1.9 2.5v20.7c0 1.5 1.5 2.7 3 2.7s3-1.2 3-2.7v-14.1l16.1 16c.5.5 1.2.8 1.9.8.3 0 .4-.1.7-.2 1-.4 1.3-1.4 1.3-2.5v-20.6c0-1.5-1-2.8-2.5-2.8zM44.2 62.3c-1.4 0-2.7 1.4-2.7 2.8s1.3 2.8 2.7 2.8l6.6.4-1.5 3.7h-8.5l-4.2-7.9 4.3-8.1h9.1l2.1 4h5.5l-3.6-7.9-.8-1.1h-15.6l-.7 1.2-5.9 10.3-.7 1.3.7 1.3 5.8 10.3.8 1.6h15.1l.7-1.7 4.3-9 1.9-4.3h-4.4l-11 .3zM65 50.5c-1.4 0-3 1.3-3 2.7v6.8h6v-6.7c0-1.5-1.6-2.8-3-2.8zM95.4 50.8c-1-.4-2.4-.2-3.1.6l-16.3 16v-14.1c0-1.5-1-2.7-2.5-2.7s-2.5 1.2-2.5 2.7v20.7c0 1.1.7 2.1 1.7 2.5.3.1.7.2 1 .2.7 0 1.6-.3 2.1-.8l16.2-16v14.1c0 1.5 1 2.7 2.5 2.7s2.5-1.2 2.5-2.7v-20.7c0-1.1-.6-2.1-1.6-2.5zM117.2 63.6l8.4-8.4c1.1-1.1 1.1-2.8 0-3.8-1.1-1.1-2.8-1.1-3.8 0l-8.4 8.4-8.4-8.4c-1.1-1.1-2.8-1.1-3.8 0-1.1 1.1-1.1 2.8 0 3.8l8.4 8.4-8.4 8.4c-1.1 1.1-1.1 2.8 0 3.8.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8l8.4-8.4 8.4 8.4c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8c1.1-1.1 1.1-2.8 0-3.8l-8.4-8.4zM62 73.9c0 1.4 1.5 2.7 3 2.7 1.4 0 3-1.3 3-2.7v-11.9h-6v11.9z" />
          </svg>
        </Grid>

        <Grid item className={classes.icon}>
          <svg viewBox="0 0 128 128">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#3A4D54"
              d="M20 96.9v-8.1c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.9 1.8 1.9v17c0 4.1-2 7.4-5.6 9.5-1.7 1-3.5 1.5-5.4 1.5h-.8c-4.1 0-7.4-2-9.5-5.6-1-1.7-1.5-3.5-1.5-5.4v-.8c0-4.1 2-7.4 5.6-9.5 1.7-1 3.5-1.5 5.4-1.5h.8c2.7.1 5.1 1.1 7.1 2.9zm-15.1 8.5c0 3 1.5 5.2 4.1 6.7 1.1.6 2.2.9 3.4.9 2.9 0 5.1-1.4 6.6-3.9.7-1.2 1-2.4 1-3.8 0-2.6-1.2-4.6-3.3-6.1-1.3-.9-2.7-1.4-4.2-1.4-3.2 0-5.5 1.6-6.9 4.5-.5 1-.7 2.1-.7 3.1zm32.2-11.3h.5c4.4 0 7.8 2.1 9.9 6 .9 1.5 1.3 3.2 1.3 5v.8c0 4.1-2 7.4-5.6 9.5-1.7 1-3.5 1.5-5.4 1.5h-.8c-4.1 0-7.4-2-9.5-5.6-1-1.7-1.5-3.5-1.5-5.4v-.8c0-4.1 2.1-7.4 5.6-9.5 1.7-1.1 3.6-1.5 5.5-1.5zm-7.2 11.3c0 2.9 1.4 5 3.9 6.5 1.2.7 2.4 1 3.8 1 2.9 0 5-1.5 6.5-3.9.7-1.2 1-2.4 1-3.8 0-2.7-1.3-4.8-3.5-6.3-1.2-.8-2.6-1.2-4-1.2-3.2 0-5.5 1.6-6.9 4.5-.6 1.1-.8 2.2-.8 3.2zm34.8-7.2c-.6-.3-1.7-.4-2.3-.4-3.2-.1-5.5 1.7-6.9 4.5-.5 1-.7 2-.7 3.1 0 3.3 1.7 5.6 4.6 7 1.1.5 2.4.6 3.6.6 1 0 2.5-.6 3.4-1.1l.2-.1h.7999999999999999c.9.2 1.5.7 1.5 1.7v.4c0 2.3-4.3 2.9-5.9 3-5.7.4-10-2.7-11.6-8.2-.3-.9-.4-1.9-.4-2.9v-.8c0-4.1 2.1-7.4 5.6-9.5 1.7-1 3.5-1.5 5.4-1.5h.8c2 0 3.9.6 5.6 1.7l.1.1.1.1c.2.3.3.6.3 1v.4c0 1-.7 1.5-1.6 1.7h-.30000000000000004c-.5 0-1.8-.6-2.3-.8zm12.4 2.6c1.5-1.5 3-3 4.5-4.4.4-.4 2-2.1 2.6-2.1h.7999999999999999c.9.2 1.5.7 1.5 1.7v.4c0 .6-.7 1.4-1.2 1.8l-2.7 2.7-4.6 4.7c2 2 4 4 5.9 6l1.6 1.7c.2.2.5.4.6.7.2.3.3.6.3.9v.5c-.2.9-.8 1.6-1.7 1.6h-.3c-.6 0-1.3-.7-1.8-1.1-.9-.8-1.8-1.7-2.6-2.6l-2.9-2.9v4.6c0 1.1-.7 1.9-1.8 1.9h-.3c-1.1 0-1.8-.9-1.8-1.9v-26.1c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.8 1.8 1.9v11.9zm47.6-6.6h.4c1.1 0 1.9.8 1.9 1.9 0 1.6-1.5 2-2.8 2-1.7 0-3.4 1-4.5 2.2-1.5 1.5-2.1 3.3-2.1 5.4v9.2c0 1.1-.7 1.9-1.8 1.9h-.3c-1.1 0-1.8-.9-1.8-1.9v-9.8c0-3.8 1.8-6.8 4.9-9 1.8-1.2 3.9-1.9 6.1-1.9zm-27.1 18.3c1.4.5 3 .4 4.4.2.7-.3 2.6-1.1 3.3-1h.2c.4.2.8.5 1 .9.5 1 .3 2-.7 2.6l-.3.2c-3.6 2.1-7.5 1.8-11.1-.2-1.7-.9-3-2.3-4-4l-.2-.4c-2.3-4-2-8.3.6-12.1.9-1.3 2.1-2.3 3.5-3.1l.5-.3c3.4-2 7.1-1.8 10.6-.1 1.9.9 3.4 2.3 4.5 4.1l.2.3c.8 1.3-.2 2.5-1.2 3.3-1.2.9-2.4 2-3.5 3-2.7 2.2-5.3 4.4-7.8 6.6zm-3.3-2.3l8.5-7.3c1-.8 2-1.7 3-2.6-.8-1-2.1-1.7-3.1-2.1-2.2-.8-4.4-.6-6.4.6-2.6 1.5-3.8 4-3.7 7 0 1.2.4 2.3 1 3.4.2.4.4.7.7 1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#3A4D54"
              d="M73.7 33.7h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6v-11.4h11.3v-11.3h22.5v-11.3h13.5v22.6z"
            />
            <path
              fill="#00AADA"
              d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-72.2c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6000000000000001c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.6-10.5-1.8-13.9-.1z"
            />
            <path
              fill="#28B8EB"
              d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.3.2-.5.2z"
            />
            <path
              fill="#028BB8"
              d="M18.5 54.6c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26h-85.1v-.1z"
            />
            <path
              fill="#019BC6"
              d="M23.3 54.6c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1h-70.6z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#00ACD3"
              d="M28.2 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM39.5 24.3h9.8v9.7h-9.8v-9.7zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#23C2EE"
              d="M39.5 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#00ACD3"
              d="M50.8 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#23C2EE"
              d="M50.8 24.3h9.8v9.7h-9.8v-9.7zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zM62 35.5h9.8v9.8h-9.8v-9.8zm.9.9h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#00ACD3"
              d="M62 24.3h9.8v9.7h-9.8v-9.7zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#23C2EE"
              d="M62 13h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.2h-.8v-8.2zm1.4 0h.8v8.2h-.8v-8.2zm1.5 0h.8v8.2h-.8v-8.2zm1.5 0h.8v8.2h-.8v-8.2zm1.4 0h.8v8.2h-.8v-8.2zm1.5 0h.8v8.2h-.8v-8.2z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#00ACD3"
              d="M73.3 35.5h9.8v9.8h-9.8v-9.8zm.8.9h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#D4EEF1"
              d="M48.6 61.2c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7.1-1.5 1.3-2.7 2.7-2.7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#3A4D54"
              d="M48.6 61.9c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .9-1.9 1.9-1.9M1 55.6h125.3c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.8 4.5-7.5 5.2"
            />
            <path
              fill="#BFDBE0"
              d="M55.8 80.6c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6.1 6.1 13.7 10.8 27.6 10.9 1-.1 2-.1 3-.1z"
            />
            <path
              fill="#D4EEF1"
              d="M45.9 72.7c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.4 1.3 5.8 2.5 11.4 2.9z"
            />
          </svg>
        </Grid>
        <Grid item className={classes.icon}>
          <svg viewBox="0 0 128 128">
            <path className="cls-1" d="M38.71,61.21V73H37.12V61.21Z" />
            <path
              className="cls-1"
              d="M41.63,66.85c0-.88,0-1.6-.07-2.3H43l.09,1.4h0A3.28,3.28,0,0,1,46,64.36c1.23,0,3.13.7,3.13,3.62V73H47.56v-4.9c0-1.37-.53-2.51-2.05-2.51a2.28,2.28,0,0,0-2.16,1.58,2.14,2.14,0,0,0-.11.72V73H41.63v-6.2Z"
            />
            <path
              className="cls-1"
              d="M53.66,62.11v2.44H56v1.18H53.66v4.58c0,1.05.31,1.65,1.21,1.65a3.72,3.72,0,0,0,.93-.11L55.88,73a4.09,4.09,0,0,1-1.43.21,2.29,2.29,0,0,1-1.74-.65,3.05,3.05,0,0,1-.62-2.21V65.73H50.71V64.55h1.37v-2Z"
            />
            <path
              className="cls-1"
              d="M58.57,69.08a2.79,2.79,0,0,0,3,2.95,6.05,6.05,0,0,0,2.45-.44l.28,1.11a7.46,7.46,0,0,1-2.95.53A4,4,0,0,1,57,68.94c0-2.56,1.58-4.58,4.16-4.58,2.9,0,3.66,2.44,3.66,4a5.72,5.72,0,0,1-.05.72ZM63.3,68a2.23,2.23,0,0,0-2.24-2.51A2.61,2.61,0,0,0,58.59,68Z"
            />
            <path className="cls-1" d="M66.85,60.58h1.61V73H66.85Z" />
            <path className="cls-1" d="M71.17,60.58h1.61V73H71.17Z" />
            <path
              className="cls-1"
              d="M77.29,62.16a1,1,0,0,1-2,0,1,1,0,0,1,1-1A.94.94,0,0,1,77.29,62.16ZM75.5,73v-8.5h1.61V73Z"
            />
            <path
              className="cls-1"
              d="M82.37,61.21H84v7.92c0,3.14-1.61,4.11-3.74,4.11a5.36,5.36,0,0,1-1.7-.28l.24-1.25a4,4,0,0,0,1.34.23c1.43,0,2.27-.61,2.27-2.93v-7.8Z"
            />
            <path className="cls-1" d="M91.18,61.21V73h-2.8V61.21Z" />
            <path
              className="cls-1"
              d="M93.6,61.37a26,26,0,0,1,3.77-.25,8.2,8.2,0,0,1,5.06,1.26,5.15,5.15,0,0,1,2.09,4.46,5.89,5.89,0,0,1-2.05,4.79,9.14,9.14,0,0,1-5.7,1.53A25.2,25.2,0,0,1,93.6,73V61.37ZM96.4,71a5.4,5.4,0,0,0,1,.05c2.53,0,4.18-1.32,4.18-4.14,0-2.46-1.48-3.76-3.88-3.76a6.06,6.06,0,0,0-1.26.1Z"
            />
            <path
              className="cls-1"
              d="M113.69,68h-4.54v2.81h5.08V73h-7.88V61.21H114v2.19h-4.82v2.46h4.54V68Z"
            />
            <path
              className="cls-1"
              d="M119,70l-.88,3h-2.9L119,61.21h3.66L126.5,73h-3l-1-3Zm3.13-2-.77-2.51c-.22-.7-.44-1.58-.62-2.28h0c-.18.7-.37,1.6-.57,2.28L119.41,68Z"
            />
            <path
              className="cls-2"
              d="M1.5,64.14a3.29,3.29,0,0,0,3.35,3.21,3.21,3.21,0,1,0,0-6.42A3.28,3.28,0,0,0,1.5,64.14Z"
            />
            <path
              className="cls-1"
              d="M21.48,52.87c-1.84,0-2.94,1.42-2.94,3.8V71.28c0,2.38,1.1,3.8,2.93,3.8s2.94-1.42,2.94-3.8V66.39h0V56.67C24.42,54.29,23.32,52.87,21.48,52.87Z"
            />
            <path
              className="cls-1"
              d="M16.34,53.18h-12a2.8,2.8,0,1,0,0,5.6v0h6.16v5.11s0,.08,0,.12h0s0,.07,0,.1a5.51,5.51,0,0,1-5.62,5.39H4.7l0,0H4.43a2.81,2.81,0,1,0,0,5.61h.42a11.26,11.26,0,0,0,11.48-11s0-.07,0-.1h0c0-.24,0-.9,0-1.8v0S16.34,53.43,16.34,53.18Z"
            />
          </svg>
        </Grid>
        <Grid item className={classes.icon}>
          <svg viewBox="0 0 128 128">
            <path
              className="a"
              d="M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z"
            />
          </svg>
        </Grid>
      </Grid>
    </Fade>
  )
}

export default ToolIcons
