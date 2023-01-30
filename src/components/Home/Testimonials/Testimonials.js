import "./Testimonials.css"
import profile from "./../../../images/Home/profile-photo.jpg"
const Testimonials = () => {
  const testi = [
    {
      name: "Adrian",
      photo: profile,
      Rating: 5,
      Review:
        "This restaurant is amazing! the stuff are very nice and warm people, the food delishes!",
    },
    {
      name: "Mario",
      photo: profile,
      Rating: 2,
      Review:
        "The cheesey bread will fill your heart with love! very recommended.",
    },
    {
      name: "Messi",
      photo: profile,
      Rating: 1,
      Review:
        "Ordered the salad and pasta Margarita, best pasta in the whole country!",
    },
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
                {Array(x.Rating).fill(<span>&#9733;</span>)
                  
                }
                
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
