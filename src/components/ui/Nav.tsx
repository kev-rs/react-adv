import { NavLink } from "react-router-dom"
import logo from "../../logo.svg"
import { Routes } from '../../models/routes.interface';

const Nav = ({routes}:Routes) => {
  
  return (
  <div className='main-layout'>
      <nav>
        <img src={logo} alt="react-logo" />
        <ul>
          {
            routes.map(({path, name}) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({isActive}) => isActive ? 'nav-active' : undefined}
                >{name}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Nav;

