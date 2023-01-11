
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryName} from '../Redux/actions';
import s from './Search.module.css'
import Logo from './search.png'

const Search = () => {

	const dispatch = useDispatch();
	const [name, setName] = useState('');
	

	const handleChange = (e) => {
		e.preventDefault()
		setName(e.target.value);
	};


	useEffect(() => {
		dispatch(getCountryName(name));
	}, [dispatch, name]);


	return (
		<div className={s.container}>

				<input className={s.item}
					type='text'
					placeholder='Search your country...'
					onChange={(e) => handleChange(e)}>
				</input>

				<img src={Logo} alt="" />
		</div>
	);
};

export default Search;





// const Search = () => {

// const handleInput = (e) => {
// 	e.preventDefault()
// 	setName(e.target.value)
// }

// const handleSubmit = (e) => {
// 	e.preventDefault()
// 	if(name)
// 	dispatch(getCountryName(name))
// 	setName('')
	
// }
// return (
// 	<div className={s.container}>

// 			<input className={s.item}
// 				type='text'
// 				placeholder='Search your country...'
// 				onChange={(e) => handleChange(e)}>
// 			</input>
// <button type=submit' onClick={e => handleSubmit(e)}>Look for</button> 

// 			<img src={Logo} alt="" />
// 	</div>
// );
// };

// export default Search;

