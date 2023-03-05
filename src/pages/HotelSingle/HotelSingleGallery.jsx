import React from 'react';
import galleryImg from '../../assets/Images/gallery.png';
import './HotelSingleGallery.css'

function HotelSingleGallery() {
	return (
		<main className="HotelSingleGallery-ctn">
			<img
				src={galleryImg}
				alt=""
			/>
		</main>
	);
}

export default HotelSingleGallery;
