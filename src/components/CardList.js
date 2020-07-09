import React from "react"
import styled from "styled-components"

import Link from "./Link"

const Table = styled.div`
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
`

const Item = styled(Link)`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text} !important;
  box-shadow: 0 1px 1px ${(props) => props.theme.colors.tableItemBoxShadow};
  margin-bottom: 1px;
  padding: 1rem;
  width: 100%;
  color: #000;

  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 1px ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.tableBackgroundHover};
  }
`

const ItemTitle = styled.div``

const ItemDesc = styled.p`
  margin-bottom: 0;
  opacity: 0.6;
`

const LeftContainer = styled.div`
  display: flex;
  width: 75%;
  margin-right: 2rem;
`
// TODO create generalized CardList / TableCard
// TODO prop if ordered list or unordered
const CardList = ({ idx, link, title, description }) => {
  return (
    <Table>
      <Item key={idx} to={link}>
        <LeftContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemDesc>{description}</ItemDesc>
        </LeftContainer>
      </Item>
    </Table>
  )
}

export default CardList
