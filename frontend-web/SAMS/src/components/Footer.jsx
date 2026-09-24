import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <main>
                <footer>
                    <p>© 2026 SAMS. All rights reserved.</p>

                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/featurecard">Features</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/navbar">Navbar</Link>
                        <Link to="/footer">Footer</Link>
                    </div>
                </footer>
            </main>
        </>
    );
}