import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Hero} from "./Hero/Hero";
import {Highlights} from "./Highlights/Highlights";
import {Testimonials} from "./Testimonials/Testimonials";
import {About} from "./About/About";

export function Home() {
  return (
    <div>
      <Header name="About" home="Home" />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer name="About" home="Home" />
    </div>
  );
}


