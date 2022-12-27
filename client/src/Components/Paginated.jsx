import React from 'react';
import s from './Paginated.module.css'


const Paginated = ({ countries, couPerPage, paginated }) => {
	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(countries / couPerPage); i++) {
		pageNumber.push(i);
	}

	return (
	
		<div className={s.containerPag}>
				<ul className={s.listPag} >
					{pageNumber &&
						pageNumber.map((n) => (
							<li className= {s.item} key={n}>
								<a onClick={() => paginated(n)}href>{n}</a>
							</li>
						))}
				</ul>
			</div>
	
	);
};

export default Paginated;