import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Highlights from "../Home/Highlights/Highlights";
import Testimonials from "../Home/Testimonials/Testimonials";
import About from "../Home/About/About";

export function Menu() {
  return (
    <>
      <Header />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

