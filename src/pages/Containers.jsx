import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import UseCases from '../components/UseCases.jsx';
import Gallery from '../components/Gallery.jsx';
import Prices from '../components/Prices.jsx';
import Build from '../components/Build.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function Containers() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <UseCases />
        <Gallery />
        <Prices />
        <Build />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
