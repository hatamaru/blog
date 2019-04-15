import React from "react"
import { Grid } from "./grid"
import Twitter from "./twitter"
import styled from "styled-components"

const FooterWrap = styled.footer`
  width: 100%;
  padding: 24px 24px 0;
  @media (max-width: 600px) {
    padding: 0 8px;
  }
`

const CopyWriteArea = styled.div`
  align-self: center;
  text-align: center;
  grid-row: span 1;
  grid-column: 3 / span 8;
  @media (max-width: 960px) {
    grid-column: 1 / span 8;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 4;
  }
`
const About = styled.div`
  border: 1px solid #c3ced2;
  padding: 8px;
  grid-row: span 3;
  grid-column: 3 / span 4;
  @media (max-width: 960px) {
    grid-column: 1 / span 4;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 4;
  }
`

const FooterTitle = styled.h3`
  margin-top: 13px;
  color: #102326;
  font-weight: bold;
`

const FooterLink = styled.a`
  color: #009eac;
`

export default () => {
  return (
    <FooterWrap>
      <Grid style={{ gridAutoFlow: "column" }}>
        <About>
          <FooterTitle>About</FooterTitle>
          <FooterLink href="https://www.youtube.com/channel/UCL7Xcbd0r2NadKR-wYhXPsw/featured?view_as=subscriber">
            YouTube Channel
          </FooterLink>
        </About>
        <About>
          <FooterTitle>Portfolio</FooterTitle>
        </About>
        <Twitter />

        <CopyWriteArea>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </CopyWriteArea>
      </Grid>
    </FooterWrap>
  )
}
