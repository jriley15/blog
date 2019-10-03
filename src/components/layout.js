/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ReactGA from "react-ga"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    //Google analytics scripts
    ReactGA.initialize("UA-145349824-1")

    ReactGA.pageview(window.location.pathname)
    return () => {}
  }, [])

  return (
    <>
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
