import React from "react"
import App, { Container } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme"
import Footer from "../components/Footer"
import ReactGA from "react-ga"
import Router from "next/router"

class MyApp extends App {
  state = {
    routeChanged: false,
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    //Google analytics scripts
    ReactGA.initialize("UA-145349824-1")

    ReactGA.pageview(window.location.pathname)
    Router.events.on("routeChangeStart", this.handleRouteChange)
  }

  componentWillUnmount() {
    Router.events.off("routeChangeStart", this.handleRouteChange)
  }

  handleRouteChange = url => {
    ReactGA.pageview(url)
    this.setState({ routeChanged: true })
    //console.log("page view: ", url)
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Head>
          <title>Jordan Portfolio</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <Component {...pageProps} />

          <Footer routeChanged={this.state.routeChanged} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
