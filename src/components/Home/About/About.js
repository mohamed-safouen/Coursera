import './About.css'
import adrian from './../../../images/Home/Mario and Adrian A.jpg'
import mario from "./../../../images/Home/Mario and Adrian b.jpg";
const About = () => {
  return (
    <div className="About">
      <div className="title_description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="two_img">
        <img className="adrian_img" src={adrian} alt="Adrian" />
        <img className="mario_img" src={mario} alt="Mario" />
      </div>
    </div>
  );
};
export default About;
