import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	alphabeticalOrder,
	byActivity,
	byContinents,
	getAllActivities,
	getAllCountries,
	populationOrder,
	setLoading,
} from '../Redux/actions';
import Card from './Card';
import Search from './Search';
import Paginated from './Paginated';
import { Link } from 'react-router-dom';
import s from './Home.module.css'

const Home = () => {
	const dispatch = useDispatch();
	const countries = useSelector((e) => e.countries); //estados "globales"
	const loading = useSelector((e) => e.loading); //estados "globales"
	const activities = useSelector((e) => e.activities); //estados "globales"
	const [currentPage, setCurrentPage] = useState(1);
	const [couPerPage] = useState(10);
	const indexlast = currentPage * couPerPage;
	const indexFirst = indexlast - couPerPage;
	const allpages = countries.slice(indexFirst, indexlast);
	const [orderName, setOrderName] = useState('');
	const [orderPopulation, setOrderPopulation] = useState('');

	const handleOrderN = (e) => {
		e.preventDefault();
		dispatch(alphabeticalOrder(e.target.value));
		setCurrentPage(1);
		setOrderName(`Ordenado ${e.target.value}`);
	};

	const handleOrderP = (e) => {
		e.preventDefault();
		dispatch(populationOrder(e.target.value));
		setCurrentPage(1);
		setOrderPopulation(`Ordenado ${e.target.value}`);
	};

	const paginated = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleContinents = (e) => {
		dispatch(byContinents(e.target.value));
		setCurrentPage(1)
	};

	const handleByActivity = (e) => {
		dispatch(byActivity(e.target.value));
	};

	useEffect(() => {
		dispatch(getAllCountries());
		dispatch(getAllActivities());
		dispatch(setLoading(true));
	}, [dispatch]);

	return (
		
		
		<div className={s.mainDiv}>

			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Cairo+Play&display=swap" rel="stylesheet"/>

			<div className={s.filters}>

			
				<select className={s.itemHome} onChange={(e) => handleOrderP(e)}>
					<option value=''>Ordenar por población</option>
					<option value='Asc'>Poblacion Ascendente</option>
					<option value='Des'>Poblacion Descendente</option>
				</select>
				

				<select className={s.itemHome} onChange={(e) => handleOrderN(e)}>
					<option value='Asc'>Ordenadar País Asc-Des</option>
					<option value='Asc'>Asc</option>
					<option value='Des'>Des</option>
				</select>

				<select className={s.itemHome} onChange={(e) => handleByActivity(e)}>
					<option value='Nothing'>Seleccionar Actividades</option>
					<option value='All'>All</option>
					{activities.map((i) => (
						<option value={i.name}>{i.name}</option>
					))}
				</select>

				<select className={s.itemHome} onChange={(e) => handleContinents(e)}>
					<option value='All'>Seleccionar continentes..</option>
					<option value='All'>Todos los continents..</option>
					<option value='South America'>South America</option>
					<option value='North America'>North America</option>
					<option value='Europe'>Europe</option>
					<option value='Africa'>Africa</option>
					<option value='Asia'>Asia</option>
					<option value='Oceania'>Oceania</option>
					<option value='Antarctica'>Antarctica</option>
				</select>

				
			</div>
			

			

			<div className={s.containerCards}>
				{!loading ? (
					allpages.map((i) => (
						<div className={s.cards}>
							<Link to={'/detail/' + i.id}>
								<Card
									key={i.id}
									name={i.name}
									flag={i.flag}
									continents={i.continents}
								/>
							</Link>
						</div>
					))
				) : (
					<div className='contenedor_loading'>
						<div className='loading'>Loading...</div>
					</div>
				)}
			</div>
			<Paginated
				countries={countries.length}
				couPerPage={couPerPage}
				paginated={paginated}
			/>
        </div>
		
	);
};

export default Home;

