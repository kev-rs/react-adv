import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index'
import Nav from '../components/ui/Nav'

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route path='/lazy1' element={<LazyPage1 />} />
          
        <Route path='/lazy2' element={<LazyPage2 />} />
          
        <Route path='/lazy3' element={<LazyPage3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;