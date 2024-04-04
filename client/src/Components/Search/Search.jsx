import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountryName } from "../../Redux/actions";
import { getAllCountries } from "../../Redux/actions";
import s from "./Search.module.css";
import Logo from "./search.png";

const Search = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    if (name === "") {
      alert("Exact name required");
    } else {
      dispatch(getCountryName(name));
    }
    setName("");
  }

  return (
    <div className={s.container}>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <input
          className={s.item}
          onChange={(e) => handleInputChange(e)}
          type="text"
          value={name}
          placeholder="Search your country..."
        />
        <img className={s.img} src={Logo} alt="" />
      </form>
    </div>
  );
};

export default Search;

// const Search = () => {

// const handleInput = (e) => {
// 	e.preventDefault()
// 	setName(e.target.value)
// }

// const handleSubmit = (e) => {
// 	e.preventDefault()
// 	if(name)
// 	dispatch(getCountryName(name))
// 	setName('')

// }
// return (
// 	<div className={s.container}>

// 			<input className={s.item}
// 				type='text'
// 				placeholder='Search your country...'
// 				onChange={(e) => handleChange(e)}>
// 			</input>
// <button type=submit' onClick={e => handleSubmit(e)}>Look for</button>

// 			<img src={Logo} alt="" />
// 	</div>
// );
// };

// export default Search;
