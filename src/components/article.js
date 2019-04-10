import React from "react"
import styled from "styled-components"

const Article = styled.div`
  grid-row: span 4;
  :nth-child(even) {
    grid-column: 3 / span 4;
  }
  :nth-child(odd) {
    grid-column: 7 / span 4;
  }
  :nth-child(1) {
    grid-row: span 5;
    grid-column: 3 / span 8;
  }
  :nth-child(2) {
    grid-row: span 3;
    grid-column: 3 / span 5;
  }
  :nth-child(3) {
    grid-row: span 3;
    grid-column: 8 / span 3;
  }
  @media (max-width: 960px) {
    :nth-child(even) {
      grid-column: 1 / span 4;
    }
    :nth-child(odd) {
      grid-column: 5 / span 4;
    }
    :nth-child(1) {
      grid-row: span 5;
      grid-column: 1 / span 8;
    }
    :nth-child(2) {
      grid-row: span 3;
      grid-column: 1 / span 5;
    }
    :nth-child(3) {
      grid-row: span 3;
      grid-column: 6 / span 3;
    }
  }
  @media (max-width: 600px) {
    :nth-child(even) {
      grid-column: span 4;
    }
    :nth-child(odd) {
      grid-column: span 4;
    }
    :nth-child(1) {
      grid-row: span 5;
    }
    :nth-child(2) {
      grid-row: span 3;
    }
    :nth-child(3) {
      grid-row: span 2;
    }
  }
`

export default props => {
  const { chirdren } = props
  return <Article {...props}>{chirdren}</Article>
}
