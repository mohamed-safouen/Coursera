import Header from"./components/Header";
import Footer from "./components/Footer";
import './App.css';
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
