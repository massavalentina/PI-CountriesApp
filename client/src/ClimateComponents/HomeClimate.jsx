import React, { useState } from 'react';
import s from './HomeClimate.module.css';
import SearchBarClimate from './SearchBarClimate.jsx'
import Cards from './Cards.jsx';
import pais from './img/pais.png'
import ciudad from './img/ciudad.png'
import add from './img/add.png'
import wind from './img/wind.png'




export default function HomeClimate(props) {
  const [cities, setCities] = useState([]);

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'


  function onSearch(ciudad) {

   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };

          setCities(oldCities => [...oldCities, ciudad]);

        } else {
          alert("Ciudad no encontrada");
        }
      });


  
  }


 function onClose(id){
   setCities(oldCities => oldCities.filter(c => c.id != id) );

 }

  return (

  <div className={s.backg}>

    <div className={s.containerCli} >

      <div className={s.title} >
        The Weather App
      </div>

      

      <div className={s.subTitle}>
        from the Countries App creators
      </div>

      <img className={s.wind} src={wind} alt="" />
      
        <div className={s.searchCli}>
          <SearchBarClimate onSearch={onSearch}/>
        </div>
        <div className={s.containerCards}>
          <Cards className={s.cardCli} cities={cities} onClose={onClose}/>
        </div>

        <div className={s.textCli}>
          <div className={s.text}>Don't risk another second! </div>
          <div className={s.text}>Search for your preferred cities and find out what their climate is to ensure a better experience on your new adventures!</div>
          <div className={s.text}>Here we leave a map at your disposal so you can search for any location in the world</div>
        </div>

  

       <iframe
        className={s.iframe} title="map" src={`https://maps.google.com/?ll=${props.lat},${props.lon}&z=5&t=k&output=embed`}></iframe>

    </div>
  </div>
  );

}
