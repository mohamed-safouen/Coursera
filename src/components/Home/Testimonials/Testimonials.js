import "./Testimonials.css"
import profile from "./../../../images/Home/profile-photo.jpg"
const Testimonials = () => {
  const testi = [
    { name: "Adrian", photo: profile, Rating: 5, Review: "" },
    { name: "Mario", photo: profile, Rating: 2, Review: "" },
    { name: "Messi", photo: profile, Rating: 1, Review: "" },
  ];
  return (
    <div  className="testimo">
      <div className="title_test">
        <h1>Testimonials</h1>
      </div>

      <div className="Clients">
        {testi.map((x, index) => {
          return (
            <div key={index} className="Card-profile">
              <div className="Ratting">
                Rating : {x.Rating}
                <span>&#9733;</span>
              </div>
              <div className="profile">
                <div className="photo">
                  <img src={x.photo} alt={x.name} />
                </div>
                <h4>{x.name}</h4>
              </div>
              <div className="review">{x.Review}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Testimonials;
