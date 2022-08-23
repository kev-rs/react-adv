import { Link, Outlet} from 'react-router-dom';

export const LazyLayout = () => {

  return (
    <div>
      <h1>Lazy - Layout</h1>
      <ul>
            <li>
                <Link to={`lazy1`}>Lazy Page 1</Link>
            </li>
            <li>
                <Link to={`lazy2`}>Lazy Page 2</Link>
            </li>
            <li>
                <Link to={`lazy3`}>Lazy Page 3</Link>
            </li>
        </ul>
      <Outlet />
    </div>
  )
}

export default LazyLayout