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
            student management, and academic operations through a centralized platform.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
