import React from "react";
import style from './Card.module.css'




export default function Card({flag, name, continents}) {
    return (
        <div className={style.container}>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Cairo+Play&display=swap" rel="stylesheet"/>
          <div className={style.itemsC}>
                <div className={style.imgContainer}>
                    <img  src={flag} alt="Imagen no disponible" />
                </div> 

                <div className={style.infoContainer}>
            
                    <h3 >{name}</h3> 
                
                    <h4>{continents}</h4>
                </div>
        </div>
                
                      
        </div>
    );
}