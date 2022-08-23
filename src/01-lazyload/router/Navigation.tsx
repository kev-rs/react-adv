import React from 'react'
import { Link, Route, Routes, useLocation, useMatch, useParams } from 'react-router-dom';
import { LazyPage2, LazyPage3 } from '../pages';
import LazyPage1 from '../pages/LazyPage1';
import { routes } from '../../Routes/routes';

const Navigation = () => {
    const { children } = routes[0];
    const { id } = useParams();
    
  return (
      <>
        <h1>Kev</h1>
        {
            children?.map(({component:Component, path, name}) => (path === id) && (
                <Component key={path}/>
            ))
        }
      </>
  )
}

export default Navigation;