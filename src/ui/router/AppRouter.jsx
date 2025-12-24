import About from '../page/About';
import Certificates from '../page/Certificates';
import Contact from '../page/Contact';
import Footer from "../components/layout/Footer";
import Home from '../page/Home';
import Navbar from "../components/layout/Navbar";
import Projects from '../page/Projects';

export default function AppRouter({ toggleTheme, theme }) {
  return (
    <>
      <Navbar  toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Home />
        <Projects />
        <Certificates />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
