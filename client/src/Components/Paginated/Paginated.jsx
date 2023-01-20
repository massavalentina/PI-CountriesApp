import React from 'react';
import s from './Paginated.module.css'


const Paginated = ({ countries, couPerPage, paginated }) => {

	const pagesNumber = [];

	for (let i = 0; i <= Math.ceil(countries / couPerPage) - 1; i++) {     // se recorre un array
		pagesNumber.push(i + 1);   // para que empiece en 1
	}

	return (
	
		<div className={s.containerPag}>
				<ul className={s.listPag} >
					{pagesNumber &&                // se fija si pageNumber tiene algo
						pagesNumber.map((n) => {   // si tiene algo, lo mapea
							return(                // se le pasa el n (número) a la funcion paginated del home
							<li className= {s.item} key={n}>
								<div onClick={() => paginated(n)}> {n}</div> 
							</li>
						)})}
				</ul>
			</div>
	
	);
};

export default Paginated;












