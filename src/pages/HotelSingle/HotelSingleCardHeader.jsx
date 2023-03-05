import React from 'react';
import StarRating from '../UniversalComponents/StarRating';
import './HotelSingleCardHeader.css';
import shareIcon from '../../assets/Icons/share.svg';
import saveIcon from '../../assets/Icons/heartEmpty.svg';

function HotelSingleCardHeader() {
	return (
		<main className="HotelSingleCardHeader-ctn">
			<section className="HotelSingleCardHeader-general-info">
				<div className="general-info-title">
					<h1>[HOTEL NAME HERE]</h1>
					<StarRating />
					<button>
						<img
							src={shareIcon}
							alt=""
						/>
						Share
					</button>
					<button>
						<img
							src={saveIcon}
							alt=""
						/>
						Save
					</button>
				</div>
				<div className="HotelSingleCardHeader-general-description">
					<h3>[CITY], [STATE], [COUNTRY]</h3>
					<div className="HotelSingleCardHeader-general-buttons">
						<button>[TAG 1]</button>
						<button>[TAG 2]</button>
					</div>
				</div>
			</section>

			<section className="HotelSingleCardHeader-general-price">
				<h1>
					$[PRICE] <span>/ Per Nigth</span>
				</h1>
				<button>Book This Now</button>
			</section>
		</main>
	);
}

export default HotelSingleCardHeader;
