import React from "react";
import {Link} from 'react-router-dom';
import s from './LandingPage.module.css'
import logo from './landingimg.png'

export default function LandingPage () {
    return (
        
        <div className={s.landingPageBk}>

        <div className={s.landingPageContainer}> 
    
        <div>
        
            
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Cairo+Play&display=swap" rel="stylesheet"/>
        </div>
 
 
        <img className={s.img} src={logo} alt="" />

        <div className={s.containerInfo}>
            <p className={s.subTitle}>Welcome to</p>
            <h1 className={s.title}>Countries App</h1>
            <p className={s.text}>  Find the best locations so you can plan and build your roadmap. </p>
            <p className={s.text}>Enjoy to the maximum the incredible experiences that each part of the world can offer you</p>

            <Link to='/home'>
                <button className={s.buttonLink}>Get started now </button>
            </Link>
        </div>           
                   
            
           
        </div>
        
        </div>    
           
            
    )
}