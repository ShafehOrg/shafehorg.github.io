import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const navInfo = [
    { link: "siddur", text: "Siddur" },
    { link: "tikkun", text: "Tikkun Korim" },
    { link: "megillah", text: "Megillah" },
  ]
  return (
  <header>
    <div className="container">
      <h1 className="siteTitle">
        <Link to="/" >{siteTitle}</Link>
      </h1>
      <nav>
          {navInfo.map(page => (
            <Link
              key={`nav-key-/${page.link}/`}
              activeClassName="active"
              to={`/${page.link}/`}
            >
              {`${page.text}`}
            </Link>
          ))}
      </nav>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `hi`,
}

export default Header
