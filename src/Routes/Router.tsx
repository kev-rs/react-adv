import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sign_in from '../components/auth/Sign_in'
import Sign_up from '../components/auth/Sign_up'
import Home from '../components/heroes/Home'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}>

            </Route>
            
            <Route path='/auth'>
                <Route path='/auth/register' element={<Sign_up />} />
                <Route path='/auth/login' element={<Sign_in />} />
                <Route index element={<Sign_in />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

const NotFound = () => {
    return (    
        <div style={{height: '100vh', display: 'flex', alignItems: "center", justifyContent: "center"}}>
            <h1 style={{color: 'grey'}}>Not found 404</h1>
        </div>
    )
}

export default Router