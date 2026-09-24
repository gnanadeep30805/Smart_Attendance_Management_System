import React from 'react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <section id="home">
                    <div>
                        <p>SMART ATTENDANCE MANAGEMENT SYSTEM (SAMS)</p>

                        <h1>
                            Smarter Attendance.
                            <br />
                            Better Management.
                        </h1>

                        <p>
                            SAMS helps institutions manage attendance,
                            students, and academic records through a
                            centralized platform.
                        </p>

                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Create Account</Link>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <div>
                        <p>ABOUT SAMS</p>

                        <h2>
                            A centralized attendance management platform
                        </h2>

                        <p>
                            SAMS is designed to simplify attendance tracking,
                            student management, reporting, and related academic
                            workflows through a single platform.
                        </p>
                    </div>
                </section>
                
                
                <section id="features">
                    <h2>Features</h2>

                    <div>
                        <FeatureCard />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;