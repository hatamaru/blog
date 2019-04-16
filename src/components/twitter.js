import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const TweetWrap = styled.div`
  border: 1px solid #c3ced2;
  padding: 8px;
  grid-row: span 8;
  grid-column: 7 / span 4;
  @media (max-width: 960px) {
    grid-column: 5 / span 4;
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

export default class Twitter extends React.Component {
  componentDidMount() {
    window.twttr && window.twttr.widgets && window.twttr.widgets.load()
  }

  render() {
    return (
      <TweetWrap>
        <FooterTitle>Twitter</FooterTitle>
        <a
          className="twitter-timeline"
          href="https://twitter.com/hatamaru_code?ref_src=twsrc%5Etfw"
          data-chrome="noheader"
        >
          {/* Tweets by hatamaru_code */}
        </a>
        <Helmet>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
        </Helmet>
      </TweetWrap>
    )
  }
}
