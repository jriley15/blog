import { createMuiTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(120, 80, 228)",
    },
    background: {
      //default: "#FFFFFF",
    },
    text: {
      //primary: "#ffffff",
      //secondary: "#00000",
    },
    type: "dark",
  },
  /*typography: {
    fontFamily: [
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },*/
})

export default theme
