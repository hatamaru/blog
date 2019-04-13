import React from "react"
// import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import Header from "../components/header"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <>
        <Header title={title} />
        <main style={{ backgroundColor: "#F2F2F2" }}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )
  }
}

export default Layout
