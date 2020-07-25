import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <nav
    style={{
      maxWidth: 960,
      margin: `0 auto`,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <Link to="/">Index</Link>
    <Link to="/about">About</Link>
    <Link to="/policy">Policy</Link>
  </nav>
)

export default Nav