import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LazyLayout from '../01-lazyload/layout/LazyLayout';
import { LazyPage2 } from '../01-lazyload/pages/index'
import Navigation from '../01-lazyload/router/Navigation';
import Nav from '../components/ui/Nav'
import { routes } from './routes';
import LazyPage3 from '../01-lazyload/pages/LazyPage3';


const Router = () => {

  return (
    <BrowserRouter>
      <Nav routes={routes} />

      <Suspense fallback={<span>Loading.....</span>}>
        <Routes>
          {
            routes.map(({ component: Component, path, name }) => (
              <Route path={path} element={<Component />} key={path}>
                {
                  path === 'lazyload' &&
                  <>
                    <Route path=':id' element={<Navigation />} />
                    <Route path='*' element={<LazyPage2 />}/>
                  </>
                }
              </Route>
            ))
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router;

