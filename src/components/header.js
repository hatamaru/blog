import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Grid } from "./grid"

const Title = styled(Link)`
  :hover {
    text-decoration: none;
  }
  font-weight: bold;
  font-size: 1.4rem;
  align-self: center;
  grid-column: 3 / span 3;
  @media (max-width: 960px) {
    grid-column: span 3;
  }
  @media (max-width: 600px) {
    grid-column: span 3;
  }
`

const HeaderWrap = styled.header`
  width: 100%;
  padding: 0 24px;
  @media (max-width: 600px) {
    padding: 0 8px;
  }
`

export default props => {
  const { title } = props
  return (
    <HeaderWrap>
      <Grid>
        <Title to="/">{title}</Title>
      </Grid>
    </HeaderWrap>
  )
}
