import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import Home from '../components/heroes/Home'
import { useAppSelector } from '../hooks/redux-hooks';

const Router = () => {

    const { online } = useAppSelector(state => state.auth);

  return (
    <BrowserRouter>
        <Routes>
            {
                online
                    ? <Route path='/' element={<Home />} />
                    :
                        <Route path='/auth'>
                            <Route path='/auth/register' element={<SignUp />} />
                            <Route path='/auth/login' element={<SignIn />} />
                            <Route index element={<SignIn />} />
                            <Route path='*' element={<NotFound />} />
                        </Route>
            }
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