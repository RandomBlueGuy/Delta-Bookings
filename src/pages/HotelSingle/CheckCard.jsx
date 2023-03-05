import React from 'react';
import './CheckCard.css';
import GoogleMapReact from 'google-map-react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CheckCard() {
	const OurLocation = {
		center: {
			lat: 6.266716684592229,
			lng: -75.58217656599909,
		},
		zoom: 12,
	};

	return (
		<section className="check__card">
			<div className="check__card-map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: '' }}
					defaultCenter={OurLocation.center}
					defaultZoom={OurLocation.zoom}>
					<prompt
						lat={6.266716684592229}
						lng={-75.58217656599909}
						text="Our Location"
					/>
				</GoogleMapReact>
			</div>
			<section className="check__card-info">
				<div className="check__card-rate">
					<h4 className="rate-title">[RATE TYPE]</h4>
					<p className="rate-description">
						<FontAwesomeIcon icon={faCheck} />
						[SERVICE INFO]
					</p>
					<p className="rate-description">
						<FontAwesomeIcon icon={faCheck} />
						[SERVICE INFO]
					</p>
				</div>

				<div className="check__card-price">
					<p>Per Nigth</p>
					<h2>[$$$]</h2>
					<h1>[$$$]</h1>
				</div>
			</section>

			<form
				className="check__card-form"
				action="">
				<input
					type="date"
					placeholder="Fecha del Check-in"
				/>
				<input
					type="date"
					placeholder="Fecha de Check-out"
				/>
				<input
					type="text"
					placeholder="Ingrese ciudad de destino"
				/>
				<input
					type="number"
					placeholder="Choose"
				/>
				<button className="search-btn">Book This Now</button>
			</form>
		</section>
	);
}

export default CheckCard;
