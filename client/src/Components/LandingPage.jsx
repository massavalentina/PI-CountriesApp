import React from "react";
import {Link} from 'react-router-dom';
import s from './Landing.module.css'

export default function LandingPage () {
    return (
        
        <div className={s.landingPageBk}>

        <div className={s.landingPageContainer}> 
    
        <div>
        <div class="tenor-gif-embed" data-postid="22588572" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/avion-travel-gif-22588572">Avion Travel Sticker</a>from <a href="https://tenor.com/search/avion-stickers">Avion Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Cairo+Play&display=swap" rel="stylesheet"/>
        </div>

        <div className={s.containerInfo}>
            <p className={s.subTitle}>Welcome to</p>
            <h1 className={s.title}>Countries App</h1>
            <p className={s.text}>  Find the best locations so you can plan and build your roadmap. Making the most of the incredible experiences that each site can give you</p>
            
            <Link to='/home'>
                <button className={s.buttonLink}>Get started now </button>
            </Link>
        </div>           
                   
            
           
        </div>
        
        </div>    
           
            
    )
}