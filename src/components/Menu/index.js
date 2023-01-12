import Header from "../Header/header";
import Footer from "../Footer/footer";
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

