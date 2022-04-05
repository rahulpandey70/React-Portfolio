import "./App.css";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Protfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Protfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
