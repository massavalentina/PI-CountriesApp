import React from 'react';
import s from './Paginated.module.css'


const Paginated = ({ countries, couPerPage, paginated }) => {
	const pagesNumber = [];

	for (let i = 0; i <= Math.ceil(countries / couPerPage) - 1; i++) {
		pagesNumber.push(i+1);
	}

	return (
	
		<div className={s.containerPag}>
				<ul className={s.listPag} >
					{pagesNumber &&
						pagesNumber.map((n) => {
							return(
							<li className= {s.item} key={n}>
								<div onClick={() => paginated(n)}> {n}</div>
							</li>
						)})}
				</ul>
			</div>
	
	);
};

export default Paginated;












