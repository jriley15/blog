import React from "react"
import App, { Container } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../theme"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
    if (process.browser) {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag("js", new Date())
      gtag("config", "UA-145349824-1")
    }
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

          <Footer />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
