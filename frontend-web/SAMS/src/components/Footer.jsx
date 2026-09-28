import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <main>
                <footer>
                    <p>© 2026 SAMS. All rights reserved.</p>

                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </footer>
            </main>
        </>
    );
}