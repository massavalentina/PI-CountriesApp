import React from 'react';
import styles from './Card.module.css';


export default function Card(props) {

  return (
    <div className={styles.container}>
    <div className={styles.containerCi}>
      <button
        onClick={() => props.onClose(props.id)}
        className={styles.button}
      >x</button>
      <div className={styles.top}>
        <img
          
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          className={styles.img}
          alt='Img not found'></img>
               <h2 className={styles.name}>{props.name}</h2>
               <div className={styles.info}>
   
          
          <div className={styles.temps}>
            <div className={styles.min}>
              <label className={styles.label}>Min: {props.min} </label>
            </div>
            <div className={styles.max}>
              <label className={styles.label}>Max: {props.max} </label>
            </div>
          </div>
          <h4 className={styles.desc}><em>{props.desc}</em></h4>
        </div>
      </div>
      {/* <iframe
        className={styles.iframe}
        title="map"
        src={`https://maps.google.com/?ll=${props.lat},${props.lon}&z=5&t=k&output=embed`}
      ></iframe> */}
    </div>
    </div>
  )
};