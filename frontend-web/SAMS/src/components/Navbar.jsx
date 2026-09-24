import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggedIn = false;

    const handleHome = () => navigate('/');
    const handleAbout = () => navigate('/about');
    const handleFeatures = () => navigate('/featurecard');
    const handleContact = () => navigate('/contact');
    const handleLogin = () => navigate('/login');
    const handleRegister = () => navigate('/register');
    const handleProfile = () => navigate('/profile');
    const handleLogout = () => navigate('/');

    const isActive = (path) => location.pathname === path;

    return (
        <header>
            <nav>
                <h2>SAMS</h2>
                <div>
                    <Link to="/" onClick={handleHome} className={isActive('/') ? 'active' : ''}>Home</Link> 

                    <Link to="/about" onClick={handleAbout} className={isActive('/about') ? 'active' : ''}>About</Link>

                    <Link to="/featurecard" onClick={handleFeatures} className={isActive('/featurecard') ? 'active' : ''}>Features</Link>

                    <Link to="/contact" onClick={handleContact} className={isActive('/contact') ? 'active' : ''}>Contact</Link>

                    <Link to="/login" onClick={handleLogin} className={isActive('/login') ? 'active' : ''}>Login</Link>

                    <Link to="/register" onClick={handleRegister} className={isActive('/register') ? 'active' : ''}>Register</Link>
                </div>
                <div>
                    {isLoggedIn ? (
                        <>
                            <Link to="/profile" onClick={handleProfile} className={isActive('/profile') ? 'active' : ''}>Profile</Link>
                            <Link to="/" onClick={handleLogout} className={isActive('/logout') ? 'active' : ''}>Logout</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={handleLogin} className={isActive('/login') ? 'active' : ''}>Login</Link>
                            <Link to="/register" onClick={handleRegister} className={isActive('/register') ? 'active' : ''}>Register</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}