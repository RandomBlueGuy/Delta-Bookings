import React from 'react';
import sliderImg from '../../assets/Images/gallery-slider.jpg';
import galleryGroup1Img from '../../assets/Images/hotelPlaceholder.jpg';
import galleryGroup2Img from '../../assets/Images/hotelPlaceholder.jpg';
import './HotelSingleGallery.css';

function HotelSingleGallery() {
	return (
		<main className="HotelSingleGallery-ctn">
			<section className="gallery-slideshow">
				<img
					src={sliderImg}
					alt=""
				/>
				<button className="slider-left">◀</button>
				<button className="slider-right">▶</button>
				<div className="gallery-txt-tag">
					<p>View All Images</p>
				</div>
			</section>
			<div className="gallery-other-images">
				<div className="other-image-group">
					<img
						src={galleryGroup1Img}
						alt=""
					/>
					<div className="gallery-txt-tag">
						<p>View [SPACE] images</p>
					</div>
				</div>
				<div className="other-image-group">
					<img
						src={galleryGroup2Img}
						alt=""
					/>
					<div className="gallery-txt-tag">
						<p>View [SPACE] images</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default HotelSingleGallery;
