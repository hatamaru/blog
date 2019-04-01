import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const TweetWrap = styled.div`
  width: 50%;
  height: 400;
`

export default () => {
  return (
    <TweetWrap>
      <a
        className="twitter-timeline"
        href="https://twitter.com/hatamaru_code?ref_src=twsrc%5Etfw"
      >
        Tweets by hatamaru_code
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
