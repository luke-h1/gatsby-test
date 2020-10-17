import React, { Fragment } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./Navbar/"
import Footer from "./Footer/index"
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
