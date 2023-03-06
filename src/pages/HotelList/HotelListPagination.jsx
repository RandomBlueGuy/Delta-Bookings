import React, { useState } from 'react';
import './HotelListPagination.css';

function HotelListPagination({ maxNpages, actualPage, setActualPage }) {
	const specialChar = ['<<', '>>'];

	const firstPage = () => {
		setActualPage(0);
	};

	const nextPage = () => {
		setActualPage(actualPage + 1);
	};

	const prePage = () => {
		setActualPage(actualPage - 1);

	};

	const lastPage = () => {
		setActualPage(maxNpages - 1);

	};

	return (
		<div className="pagination-ctn">
			<button
				className={actualPage > 0 ? 'act-chk' : 'dis-chk'}
				disabled={actualPage > 0 ? false : true}
				onClick={firstPage}>
				{specialChar[0]}
			</button>
			<button
				className={actualPage > 0 ? 'act-chk' : 'dis-chk'}
				disabled={actualPage > 0 ? false : true}
				onClick={prePage}>
				{actualPage }
			</button>
			<button className="actual">{actualPage +1} / {maxNpages}</button>
			<button
				className={actualPage < maxNpages - 1 ? 'act-chk' : 'dis-chk'}
				disabled={actualPage < maxNpages - 1 ? false : true}
				onClick={nextPage}>
				{actualPage + 2}
			</button>
			<button
				className={actualPage < maxNpages - 1 ? 'act-chk' : 'dis-chk'}
				disabled={actualPage < maxNpages - 1 ? false : true}
				onClick={lastPage}>
				{specialChar[1]}
			</button>
		</div>
	);
}

export default HotelListPagination;
