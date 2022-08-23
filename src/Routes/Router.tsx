import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LazyPage1 } from '../01-lazyload/pages/index'
import Nav from '../components/ui/Nav'
import { routes } from './routes';


const Router = () => {
  
  return (
    <BrowserRouter>
        <Nav routes={routes}/>
        
      <Suspense fallback={null}>      
        <Routes>
          <Route path='/'>
            {
              routes.map(({path, component:Component}) => (
                <Route path={path} element={<Component />} key={path}/>    
              ))
            }
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router;