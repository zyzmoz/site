import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="logo">
      ElvnCode
    </div>
    <a className="btn" href="mailto:danielbrandaodacunha@gmail.com">Contact</a>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
