import { NavLink } from "react-router-dom"
import logo from "../../logo.svg"

const Nav = () => {
  return (
    <div className='main-layout'>
        <nav>
          <img src={logo} alt="react-logo" />
          <ul>
            <li>
              <NavLink 
                to='/lazy1'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
                >Lazy1</NavLink>
            </li>
            <li>
              <NavLink 
                to='/lazy2'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
                >Lazy2</NavLink>
            </li>
            <li>
              <NavLink 
                to='/lazy3'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
                >Lazy3</NavLink>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Nav