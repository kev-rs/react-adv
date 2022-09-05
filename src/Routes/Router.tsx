import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, Register, RegisterFormikPage, DynamicForm } from '../03-forms/pages';
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
                to='/register'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
              >Register</NavLink>
            </li>
            <li>
              <NavLink 
                to='/formik-basic'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
              >Formik-basic</NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-yup'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
              >Formik-yup</NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-components'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
              >Formik-components</NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-abstractations'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
              >Formik-abstractations</NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-register'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
              >Register-Formik</NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-dynamic'
                className={({isActive}) => isActive ? 'nav-active' : undefined}
              >Dynamic-Form</NavLink>
            </li>
          </ul>
        </nav>
      
        <Routes>
          <Route path='/register' element={<Register />} />

          <Route path='/formik-basic' element={<FormikBasicPage />} />

          <Route path='/formik-yup' element={<FormikYupPage />} />

          <Route path='/formik-components' element={<FormikComponents />}/>
          
          <Route path='/formik-abstractations' element={<FormikAbstraction />}/>

          <Route path='/formik-register' element={<RegisterFormikPage />}/>

          <Route path='/formik-dynamic' element={<DynamicForm />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Router;