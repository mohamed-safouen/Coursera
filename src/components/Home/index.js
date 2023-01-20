import Header from "../Header/header";
import Footer from "../Footer/footer";
import Hero from "./Hero/Hero";
import Highlights from "./Highlights/Highlights";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";

export function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}


