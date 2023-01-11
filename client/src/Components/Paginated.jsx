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












// import React from "react";
// import s from "./Paginated.module.css";

// const Paginated = ({ couPerPage, countries, paged, currentPage }) => {
//   let pageNumber = [];

//   //para saber la cantidad de paginas es ((paisesActuales-9)/10)+1 eso va dentro del Math.ceil
//   //el -9 es por los 9 paises de la página 1, el /10 es por la cantidad de países por página a partir
//   //la cuenta esa nos va a dar la cantidad de páginas a partir de la segunda inclusive. Y luego le sumo 1
//   //por la primer página.
//   if (Array.isArray(countries)) {

//     for (
//       let i = 1;
//       i <= Math.ceil((countries.length - 9) / (couPerPage + 1)) + 1;
//       i++
//     ) {
//       pageNumber = [...pageNumber, i];
//     }
//   } else {
//     pageNumber = [1];
//   }

  
//   if (pageNumber.length > 1) {
//     return (
//       <div className={s.containerPag}>
//         {pageNumber &&
//           pageNumber.map((num) => (
//             <button
//               key={"paginated" + num}
//               onClick={() => {
//                 paged(num)
//               }}
//               value = {num}
//               className = {currentPage === num? s.btnPage:''}
//             >
//               {" "}
//               {num}{" "}
//             </button>
//           ))}
//       </div>
//     )
//   } else {
//     return <div></div>
//   }
// }

// export default Paginated;