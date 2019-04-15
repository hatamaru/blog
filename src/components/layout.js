import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <>
        <Header title={title} />
        <hr style={{ width: "100%", marginBottom: 0 }} />
        <main>{children}</main>
        <hr style={{ width: "100%", marginBottom: 0 }} />
        <Footer />
      </>
    )
  }
}

export default Layout
