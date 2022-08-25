import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../logo.svg"
const Nav = () => {
  return (
    <nav>
          <img src={logo} alt="react-logo" />
          <ul>
            <li>
              <NavLink 
                to='/'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
                >Shopping</NavLink>
            </li>
            <li>
              <NavLink 
                to='/about'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
                >About</NavLink>
            </li>
            <li>
              <NavLink 
                to='/users'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
                >Users</NavLink>
            </li>
          </ul>
        </nav>
  )
}

export default Nav;