import React from "react";
import s from './Card.module.css'


export default function Card({flag, name, continent}) {
    return (
        <div className={s.container}>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Cairo+Play&display=swap" rel="stylesheet"/>


            <div >

                <div className={s.imgContainer}>

                    <img  src={flag} alt="Imagen no disponible" />

                </div> 
           

                <div className={s.infoContainer}>
                    
                    <h3>{name}</h3> 
                    
                    <h4> {continent}</h4>
                    

                </div>

            </div>
                          
        </div>
    );
}


