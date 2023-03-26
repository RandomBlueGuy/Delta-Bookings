import React, {useState} from "react";
import sliderImg from "../../assets/Images/gallery-slider.jpg";
import galleryGroup1Img from "../../assets/Images/hotelPlaceholder.jpg";
import galleryGroup2Img from "../../assets/Images/hotelPlaceholder.jpg";
import "./HotelSingleGallery.css";

function HotelSingleGallery({ currentHotel }) {

	const [imgActual, setImgActual] = useState(0);

	function nextImg(direction){
		if (direction === "right"){
			setImgActual(imgActual + 1);
			if(imgActual >= currentHotel.Gallery.length -1){
				setImgActual(0);
			}
		} else {
			setImgActual(imgActual - 1);
			if(imgActual <= 0){
				setImgActual(currentHotel.Gallery.length - 1);
			}
		}
	}

  return (
    <main className="HotelSingleGallery-ctn">
      <section className="gallery-slideshow">
        <img src={`${currentHotel?.Gallery[imgActual]}`} alt="" />
        <button className="slider-left" onClick={() => {
			 nextImg("left")
		  }
		  }>◀</button>
        <button className="slider-right" onClick={() => {
			 nextImg("right")
		  }}>▶</button>
        <div className="gallery-txt-tag">
          <p>View All Images</p>
        </div>
      </section>
      <div className="gallery-other-images">
        <div className="other-image-group">
          <img src={`${currentHotel?.FrontImg}`} alt="" />
          <div className="gallery-txt-tag">
            <p>View [SPACE] images</p>
          </div>
        </div>
        <div className="other-image-group">
          <img src={`${currentHotel?.Rooms[0].RoomImg}`} alt="" />
          <div className="gallery-txt-tag">
            <p>View [SPACE] images</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HotelSingleGallery;
