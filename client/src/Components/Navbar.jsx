import React from 'react';

import { NavLink } from 'react-router-dom';
// import Img from './images/lupa.png';
import Search from './Search';
import s from './Navbar.module.css'

function Navbar() {

	return (
        <div>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Cairo+Play&display=swap" rel="stylesheet"/>

			<div className={s.navbar}>

				<div className={s.title}>
					Countries App
				</div>
				
				<div>
					<NavLink exact to='/home'>
						<div className={s.buttonsH}>
							Home
						</div>	
					</NavLink>
				</div>        

							
				<div>
					<NavLink exact to='/create/activities'>
						<div className={s.buttons}>
							Create Activity 
						</div>
					</NavLink>
				</div>	

				<div>
					<NavLink exact to='/about'>
						<div className={s.buttons}>
							About
						</div>
					</NavLink>
				</div>

				<div>
					<Search/>
				</div>
					
			</div>
			
		</div>
	);
}

export default Navbar;