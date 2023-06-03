import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 55px;
  display: flex;
  background: #DC354B;
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
  bottom: 0;
  position: fixed;
  width: 100%;
 
`
export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #570F19;
  }
`

export const Circle = styled.nav`
display: flex;
width: 80px;
height: 75px;
background-color: #DC354B;
border-radius: 50%;
bottom: 8px;
position: fixed;
margin-left: 40%;
  }
`

