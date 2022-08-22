import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import logo from "../logo.svg"

const Router = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="react-logo" />
          <ul>
            <li>
              <NavLink 
                to='/'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
                >Home</NavLink>
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
      </div>
      <Routes>
        <Route path='/'>
          {/* <h1>Home</h1> */}
        </Route>
        <Route path='/about'>
          {/* <h1>About</h1> */}
        </Route>
        <Route path='/about'>
          {/* <h1>Users</h1> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;