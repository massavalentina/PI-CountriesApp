import React from 'react';

import { NavLink } from 'react-router-dom';
// import Img from './images/lupa.png';
import Search from './Search';
import s from './Navbar.module.css'

function Navbar() {

	return (
        <div>
			

			<div className={s.navbar}>

			<div className={s.title}>
					COUNTRIES APP
			</div>

						
							<NavLink exact to='/home'>
							<div className={s.links}>
							Home
							</div>	
							</NavLink>
						

						

							<NavLink exact to='/create/activity'>
							<div className={s.links}>
							Create Activity 
							</div>
							</NavLink>
					

						
							<NavLink exact to='/about'>
								<div className={s.links}>
								About
								</div>
							</NavLink>
						

						<div>
						<Search/>
						</div>
					
				
			</div>
		</div>
	);
}

export default Navbar;