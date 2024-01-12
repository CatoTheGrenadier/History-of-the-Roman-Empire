import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLinks = styled.div`
  width: 15%;
  display: flex;
  align-items: right;
  justify-content: flex-end;
  margin-left: 8%;
  text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`