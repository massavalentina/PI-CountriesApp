import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css'



export default function Card({image, name, continent, id}) {
    return (
        <div className={style.container}>
          
                <div className={style.imgContainer}>
                    <img  src={image} alt="Imagen no disponible" />
                </div> 

                <div className={style.infoContainer}>
                <Link to={`/home/${id}`}>
                    <span className='name'>{name}</span> 
                </Link>
                    <h5>{continent}</h5>
                </div>

                <Link to={`/home/${id}`}><button> Ver Más </button> </Link>
                      
        </div>
    );
}