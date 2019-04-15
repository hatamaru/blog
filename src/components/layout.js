import React from "react"
// import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import Header from "../components/header"
import Footer from "../components/footer"
class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <>
        <Header title={title} />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout
