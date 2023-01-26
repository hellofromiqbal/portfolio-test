import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Jumbo from "./components/jumbotron/Jumbotron";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbo />
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
