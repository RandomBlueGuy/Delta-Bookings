import React from 'react';
import RoomCard from './RoomCard';
import './HotelInfoDisplay.css';
import { useState } from 'react';

function HotelInfoDisplay() {
	const [selectedTab, setSelectedTab] = useState('ROOMS');

	function handleClick(selection) {
		setSelectedTab(selection);
	}

	return (
		<main className="HotelInfoDisplay-ctn">
			<section className="HotelInfoDisplay-tabs">
				<button
					type="button"
					value="ROOMS"
					onClick={(event) => handleClick(event.target.value)}>
					ROOMS
				</button>
				<button
					type="button"
					value="ABOUT"
					onClick={(event) => handleClick(event.target.value)}>
					ABOUT
				</button>
				<button
					type="button"
					value="FACILITY"
					onClick={(event) => handleClick(event.target.value)}>
					FACILITY
				</button>
				<button
					type="button"
					value="LOCATION"
					onClick={(event) => handleClick(event.target.value)}>
					LOCATION
				</button>
				<button
					type="button"
					value="REVIEWS"
					onClick={(event) => handleClick(event.target.value)}>
					REVIEWS
				</button>
				<button
					type="button"
					value="POLICIES"
					onClick={(event) => handleClick(event.target.value)}>
					POLICIES
				</button>
			</section>
			{/* Seccion habitaciones */}
			<section className="HotelInfoDisplay-ctn">
				<article
					className="HotelInfoDisplay-rooms-display"
					style={{ display: selectedTab === 'ROOMS' ? 'flex' : 'none' }}>
					<RoomCard />
					<RoomCard />
					<RoomCard />
				</article>

				<article
					className="HotelInfoDisplay-about-display"
					style={{ display: selectedTab === 'ABOUT' ? 'flex' : 'none' }}>
					<h1>Aquí estaría el about del hotel</h1>
					<p>...si existiera</p>
				</article>

				<article
					className="HotelInfoDisplay-facility-display"
					style={{ display: selectedTab === 'FACILITY' ? 'flex' : 'none' }}>
					<h1>Aquí estaría el facility del hotel</h1>
					<p>...si existiera</p>
				</article>

				<article
					className="HotelInfoDisplay-location-display"
					style={{ display: selectedTab === 'LOCATION' ? 'flex' : 'none' }}>
					<h1>Aquí estaría el location del hotel</h1>
					<p>...si existiera</p>
				</article>

				<article
					className="HotelInfoDisplay-reviews-display"
					style={{ display: selectedTab === 'REVIEWS' ? 'flex' : 'none' }}>
					<h1>Aquí estaría el review del hotel</h1>
					<p>...si existiera</p>
				</article>

				<article
					className="HotelInfoDisplay-policies-display"
					style={{ display: selectedTab === 'POLICIES' ? 'flex' : 'none' }}>
					<h1>Aquí estaría el policies del hotel</h1>
					<p>...si existiera</p>
				</article>
			</section>
		</main>
	);
}

export default HotelInfoDisplay;
