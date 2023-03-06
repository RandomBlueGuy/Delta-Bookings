import React from 'react';
import './RoomCard.css';
import hotelPlaceholderImg from '../../assets/Images/hotelPlaceholder.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShower,
	faBed,
	faTv,
	faCouch,
	faTick,
	faCheck,
	faSwimmingPool,
} from '@fortawesome/free-solid-svg-icons';
function RoomCard() {
	return (
		<main className="RoomCard-ctn">
			<div className="RoomCard-title">
				<h1>[ROOM TYPE]</h1>
			</div>
			<section className="RoomCard-table">
				<div className="RoomCard-table-img">
					<img
						src={hotelPlaceholderImg}
						alt=""
					/>
				</div>
				<div className="RoomCard-table-amenities">
					<ul>
						<h4>Amenities</h4>

						<li>
							<FontAwesomeIcon icon={faBed} />
							[BED TYPE]
						</li>
						<li>
							<FontAwesomeIcon icon={faShower} />
							[BATH TYPE]
						</li>
						<li>
							<FontAwesomeIcon icon={faCouch} />
							[EXTRA COMODITY]
						</li>
						<li>
							<FontAwesomeIcon icon={faTv} />
							[TV]
						</li>
					</ul>
				</div>
				<div className="RoomCard-table-inclusion">
					<ul>
						<h4>Inclusion</h4>
						<li>
							<FontAwesomeIcon icon={faCheck} />
							[INCLUSION#]
						</li>
						<li>
							<FontAwesomeIcon icon={faCheck} />
							[INCLUSION#]
						</li>
						<li>
							<FontAwesomeIcon icon={faCheck} />
							[INCLUSION#]
						</li>
					</ul>
				</div>
				<div className="RoomCard-table-price">
					<p className="RC-discount">[$$$]</p>
					<p className="RC-new-pri">[$$$]</p>
					<p>per night</p>
					<button>Book Now</button>
				</div>
			</section>
		</main>
	);
}

export default RoomCard;
