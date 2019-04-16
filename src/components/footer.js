import React from "react"
import { Grid } from "./grid"
import Twitter from "./twitter"
import styled from "styled-components"

const FooterWrap = styled.div`
  width: 100%;
  padding: 24px;
  @media (max-width: 600px) {
    padding: 8px;
  }
`

const CopyRightsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  height: 64px;
  @media (max-width: 960px) {
    height: 56px;
  }
`
const About = styled.div`
  border: 1px solid #c3ced2;
  padding: 8px;
  grid-row: span 4;
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
    <footer>
      <FooterWrap>
        <Grid style={{ gridAutoFlow: "column" }}>
          <About>
            <FooterTitle>About</FooterTitle>
            <div>
              YouTubeを中心にWebサービス開発未経験者・初心者向けの情報を発信します。
              フリーランスエンジニアとして活動しています。
            </div>
            <FooterLink href="https://www.youtube.com/channel/UCL7Xcbd0r2NadKR-wYhXPsw/featured?view_as=subscriber">
              > YouTube
            </FooterLink>
            <br />
            <FooterLink href="https://github.com/hatamaru">> Github</FooterLink>
            <br />
            <FooterLink href="#">
              > お仕事の依頼はこちら(現在ページ製作中)
            </FooterLink>
          </About>
          <About>
            <FooterTitle>Portfolio</FooterTitle>
            <div>作ったサービスをここに掲載していきます</div>
          </About>
          <Twitter />
        </Grid>
      </FooterWrap>

      <hr style={{ width: "100vw", margin: 0 }} />
      <CopyRightsArea>
        © {new Date().getFullYear()}, Hatamaru All Rights Reserved.
      </CopyRightsArea>
    </footer>
  )
}
