import React from "react"
import styled from "styled-components"

// const breakpoints = {
//   values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },

//   // 0 - 600 smartphone
//   // 600 - 960 tablet
//   // 960 - pc
// }

const MainWrap = styled.div`
  padding: 24px 24px;
  @media (max-width: 600px) {
    padding: 16px 0px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid: auto-flow 64px / repeat(12, 1fr);
  margin: 0 auto;
  max-width: 1280px;
  grid-gap: 24px;
  @media (max-width: 960px) {
    grid: auto-flow 56px / repeat(8, 1fr);
  }
  @media (max-width: 600px) {
    grid: auto-flow 56px / repeat(4, 1fr);
    grid-gap: 16px;
  }
`

export default ({ children }) => (
  <MainWrap>
    <Grid>{children}</Grid>
  </MainWrap>
)
