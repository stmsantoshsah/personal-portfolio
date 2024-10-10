import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
