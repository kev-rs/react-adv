import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();
    
    const handleLogout = () => {
        navigate('/auth/login')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
    
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default Nav