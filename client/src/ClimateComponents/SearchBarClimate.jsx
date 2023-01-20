import React, { useState } from "react";
import s from './SearchBar.module.css';

export default function SearchBarClimate({onSearch}) {

  const [city, setCity] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
    
      <input className= {s.inputS} type="text"  onChange = { e => setCity(e.target.value)} placeholder="add your city"/>
      <input className={s.button} type="submit" value="Add" />
  
    </form>
  );
}