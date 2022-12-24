import React from "react";
import {Link} from 'react-router-dom';


export default function LandingPage () {
    return (
        
        <div> 
    
            <h1>The Countrypedia</h1>
                   
                   
            <Link to='/home'>
                <button>ENTER</button>
            </Link>
           
        </div>
    )
}