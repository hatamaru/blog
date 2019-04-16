import React, { useState } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"

const Article = styled.div`
  background-color: white;
  grid-row: span 4;
  display: flex;
  flex-direction: column;
  :hover {
    cursor: pointer;
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.04),
      -10px 0 20px 0px rgba(0, 0, 0, 0.04);
  }
  :nth-child(even) {
    grid-column: 3 / span 4;
  }
  :nth-child(odd) {
    grid-column: 7 / span 4;
  }
  :nth-child(1) {
    grid-row: span 5;
    grid-column: 3 / span 8;
    flex-direction: row;
  }
  :nth-child(2) {
    grid-column: 3 / span 5;
  }
  :nth-child(3) {
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
      grid-column: 1 / span 5;
    }
    :nth-child(3) {
      grid-column: 6 / span 3;
    }
  }
  @media (max-width: 600px) {
    grid-row: span 5;
    grid-column: span 4;

    :nth-child(even) {
      grid-column: span 4;
    }
    :nth-child(odd) {
      grid-column: span 4;
    }
    :nth-child(1) {
      grid-row: span 7;
      flex-direction: column;
      grid-column: span 4;
    }
    :nth-child(2) {
      grid-column: span 4;
    }
    :nth-child(3) {
      grid-column: span 4;
    }
  }
`

const ImgWrap = styled.div`
  transition: 0.3s;
  width: ${() => "100%"};
  height: ${props =>
    props.index === 0 ? "100%" : props.hover ? "40%" : "60%"};
  @media (max-width: 600px) {
    height: ${props => (props.hover ? "40%" : "60%")};
  }
  background: ${() => "#4f4f4f"};
`

const TextWrap = styled.div`
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  padding: 8px;
  padding: ${props => props.index === 0 && `${rhythm(2)} ${rhythm(1)}`};
  @media (max-width: 600px) {
    padding: 8px;
  }
  width: ${props =>
    props.index === 0 ? (props.hover ? "120%" : "100%") : "100%"};
`
const Tag = styled.h4`
  color: #ffae19;
  margin-right: ${rhythm(1 / 4)};
  margin-top: ${rhythm(1 / 4)};
  margin-bottom: ${rhythm(1 / 8)};
`

const Title = styled.h3`
  color: #102326;
  height: 46px;
  margin-top: ${rhythm(1 / 8)};
  margin-bottom: ${rhythm(1 / 8)};
  overflow: hidden;
`

const Date = styled.small`
  color: #384952;
`

const Description = styled.p`
  display: ${props => (props.hover || props.index === 0 ? "inline" : "none")};
  font-size: 0.785rem;
  color: #c3ced2;
  padding-top: ${rhythm(1 / 4)};
  padding-top: ${props => props.index === 0 && rhythm(3 / 2)};
  @media (max-width: 600px) {
    padding-top: ${rhythm(1 / 4)};
  }
`

export default props => {
  const [hover, setHover] = useState(false)
  const { node } = props
  const handleClick = () => {
    navigate(node.fields.slug)
  }
  const title = node.frontmatter.title || node.fields.slug
  const tags = node.frontmatter.tags || []
  const index = props.index

  return (
    <Article
      onClick={handleClick}
      onMouseEnter={_ => setHover(true)}
      onMouseLeave={_ => setHover(false)}
    >
      {node.frontmatter.thumbnail && (
        <ImgWrap className="thumbnail" hover={hover} index={index}>
          <Img
            fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
            objectFit="cover"
            style={{
              width: "100%",
              height: "100%",
              opacity: hover ? "0.8" : "1",
            }}
          />
        </ImgWrap>
      )}

      <TextWrap hover={hover} index={index}>
        <div style={{ display: "flex" }}>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <Title index={index}>{title}</Title>
        <Date>{node.frontmatter.date}</Date>
        <Description hover={hover} index={index}>
          {node.frontmatter.description || node.excerpt}
        </Description>
      </TextWrap>
    </Article>
  )
}
