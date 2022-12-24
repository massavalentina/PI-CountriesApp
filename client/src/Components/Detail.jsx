import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../Redux/actions';


const Detail = (props) => {
	const [loading, setLoading] = useState(false);
	const detail = useSelector((i) => i.detail);
	const dispatch = useDispatch();
	const { id } = props.match.params;
	const { history } = props; 

	const goBack = () => {
		history.goBack();
	};

	useEffect(() => {
		dispatch(getDetail(id));
		setLoading(true);
	}, [dispatch, id]);

	return (
		<div>
			{/* <img src={Img} /> */}
			<button onClick={goBack} className='goBack'>
				<i class='fas fa-backward'></i> Go Back
			</button>
			<div className='contenedor'>
				{loading ? (
					detail.map((i) => (
						<div>
							<h1>{i.name}</h1>
							<div>
								<img className='imgDetails' src={i.img} alt='Not found'></img>

								<h3>Continent: {i.continents}</h3>
								<h3>Capital: {i.capital}</h3>
								<h3>id: {i.id}</h3>
								<h3>Sub Region: {i.subregion}</h3>
								<h3>Area: {i.area}</h3>
								<h3>Population: {i.population}</h3>
								<h1>Activities</h1>
								{i.activities.length > 0 ? (
									i.activities.map((i) => (
										<div className='activity'>
											<h3>name: {i.name}</h3>
											<h3>difficulty(1-5): {i.difficulty}</h3>
											<h3>duration: {i.duration} hours</h3>
											<h3>season: {i.season}</h3>
										</div>
									))
								) : (
									<h1>No hay actividades relacionadas</h1>
								)}
							</div>
						</div>
					))
				) : (
					<div>loading</div>
				)}
			</div>
		</div>
	);
};

export default Detail;