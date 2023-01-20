import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../Redux/actions';
import s from './Detail.module.css'

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

		<div className={s.background}>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Cairo+Play&display=swap" rel="stylesheet"/>
		<div>
			{/* <img src={Img} /> */}
			<button className={s.button} onClick={goBack} >
				You can visit every country as you wan, 
				let check it out some others!
			</button>


			<div className={s.contDetail}>
				{loading ? (
					detail.map((i) => (
						<div className={s.container}>
								

							<div class={s.productdetails}>
		
								<h1>{i.name}</h1>
								
									
										<p class={s.information}>
															<h3>Continent: {i.continent}</h3>
															<h3>Capital: {i.capital}</h3>
															<h3>id: {i.id}</h3>
															<h3>Sub Region: {i.subregion}</h3>
															<h3>Area: {i.area} km</h3>
															<h3>Population: {i.population}</h3>
															<h3>Activities:</h3></p>
							</div>
							
							<div className={s.productimage}>
								<img src={i.flag} alt="" />
							</div>
							<div className={s.cAct}>
							
								
							
								{i.activities.length > 0 ? (
									i.activities?.map((i) => (
									<div className={s.info}>

									<div>
									<p>name : {i.name} </p>
									<p>difficulty(1-5): {i.difficulty} </p>
									<p>duration : {i.duration} hours </p>
									<p>season : {i.season}</p>
									
									</div>
									</div>
									))
								) : (
									<h2 className={s.noAct}>no activities available</h2>
								)}
								
							</div>
						</div>
					))
				) : (
					<div>loading</div>
				)}
			</div>
		</div>
		</div>
	);
};

export default Detail;