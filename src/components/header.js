import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Grid } from "./grid"

const Title = styled(Link)`
  align-self: center;
  grid-column: 3 / span 2;
  @media (max-width: 960px) {
    grid-column: 1 / span 2;
  }
  @media (max-width: 600px) {
    grid-column: span 2;
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
