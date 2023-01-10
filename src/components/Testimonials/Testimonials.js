import "./Testimonials.css"
const Testimonials = () => {
  const testi = [
    { name: "Adrian", photo: "", Rating: 5, Review: "" },
    { name: "Adrian", photo: "", Rating: 5, Review: "" },
    { name: "Adrian", photo: "", Rating: 5, Review: "" },
  ];
  return (
    <>
      <div className="title_test">
        <h1>Testimonials</h1>
      </div>
     
      <div className="Clients">
         {testi.map((x,index)=>{
        return (
          <div key={index} className="Card-profile">
            <div className="Ratting">Rating :{x.Rating}</div>
            <div className="profile">
              <div className="photo">
                <img src={x.photo} />
              </div>
              <h4>{x.name}</h4>
            </div>
            <div className="review">{x.Review}</div>
          </div>
        );
      })}
        
      </div>
    </>
  );
};
export default Testimonials;
