import { useState } from "react";
import placeholder1Img from "../../assets/Images/NewsLetter-placeholder1.png";
import placeholder2Img from "../../assets/Images/NewsLetter-placeholder2.png";

function ReviewCard({ placeholderImg, dateD, dateM, user, rating, review }) {
  const [reviewVM, setReviewVM] = useState(false);
  return (
    <div className="card-ctn-nl">
      <figure className="card-ctn-nl-img-container">
        <img
          src={placeholderImg === "1" ? placeholder1Img : placeholder2Img}
          alt=""
        />
        <figcaption className="date-review">
          <h1>{dateD}</h1>
          <p>{dateM}</p>
        </figcaption>
      </figure>
      <div className="card-ctn-nl-txt-container">
        <p className="reviewer">Posted by: {user}</p>
        <p className="review">User Rating: {rating}{" / "}5</p>
        <p className="sub">{review && !reviewVM ? `${review.slice(0 , 100)}...` : review}</p>
        <button
          type="button"
          className="more"
          onClick={() => {
            setReviewVM(!reviewVM);
          }}
        >
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;
