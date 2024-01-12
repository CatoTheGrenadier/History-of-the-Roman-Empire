import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLinks = styled.div`
  width: 15%;
  display: flex;
  align-items: right;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`