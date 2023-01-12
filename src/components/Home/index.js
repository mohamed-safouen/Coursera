import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "./Hero/Hero";
import Highlights from "./Highlights/Highlights";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}


