import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import ShoppingPage from '../02-components-patterns/pages/ShoppingPage';
import Nav from './Nav.routes';

const Router = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <Nav />
        
        <Routes>
          <Route path='/' element={<ShoppingPage />}>
            //TODO: __Routes__
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Router;