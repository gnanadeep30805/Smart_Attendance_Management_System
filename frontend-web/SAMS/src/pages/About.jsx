import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <h1>About SAMS</h1>
          <p>
            Smart Attendance Management System helps institutions simplify attendance tracking,
            monitor student records, and improve academic operations through a secure, centralized platform.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
