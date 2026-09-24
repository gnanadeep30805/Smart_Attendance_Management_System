import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Login() {       
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (email === '' || password === '') {
            setError('Please fill in all fields');
        } else {
            setError('Invalid email or password');
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <section id="login">

                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>

                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />   
                        {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
                        <button type="submit">Login</button>
                    </form>

                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                    <p>Forgot password? <Link to="/forgotpassword">Forgot Password</Link></p>
                </section>
            </main>
            <Footer />
        </>
    );
}