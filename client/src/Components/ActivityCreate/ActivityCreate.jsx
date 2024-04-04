import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  createActivity,
  getAllCountries,
  getAllActivities,
  deleteActivity,
} from "../../Redux/actions";
import Modal from "../Modal/Modal";
import s from "./ActivityCreate.module.css";

const validator = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Please enter a name";
  }
  if (!input.difficulty) {
    errors.difficulty = "Please enter a difficulty level";
  }
  if (input.duration < 1) {
    errors.duration = "Please enter a duration higher";
  }
  if (!input.season) {
    errors.season = "Please select a season";
  }
  return errors;
};

const ActivityCreate = () => {
  const dispatch = useDispatch();

  const country = useSelector((e) => e.countries);

  const activities = useSelector((state) => state.activities);

  const [errors, setErrors] = useState({});

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(setLoading(true));
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validator({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheck = (e) => {
    setInput({
      ...input,
      season: e.target.value,
    });
    setErrors(
      validator({
        ...input,
        season: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(createActivity(input));
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    setShowModal(true);
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      countries: input.countries.filter((d) => d !== e),
    });
  };

  function handleClick(e) {
    window.location.reload(false);
  }

  React.useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  const handleDeleteAct = async (event, name) => {
    event.preventDefault();
    dispatch(deleteActivity(name));
  };

  return (
    <div className={s.backgroundForm}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo+Play&display=swap"
        rel="stylesheet"
      />

      <Link to="/home">
        <button className={s.btn1}>GO TO HOME</button>
      </Link>

      {showModal && <Modal setShowModal={setShowModal} showModal={showModal} />}

      <div className={s.containerAA}>
        {activities.map((activity) => (
          <div>
            <div className={s.containerA}>
              <h3>{activity.name}</h3>
              <p>{`Difficulty: ${activity.difficulty}/5`}</p>
              <p>{`Duration: ${activity.duration}`}</p>
              <p>{`Season: ${activity.season}`}</p>
              <button
                className={s.buttonA}
                onClick={(event) => handleDeleteAct(event, activity.name)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={s.container}>
        <h1>Create Activities</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            {errors.name && <div className={s.error}>{errors.name}</div>}
            <label>Name :</label>
            <input
              placeholder="Activity name"
              required
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div>
            {errors.difficulty && (
              <div className={s.error}>{errors.difficulty} </div>
            )}
            <label>Difficulty :</label>
            <select
              required
              onChange={(e) => handleChange(e)}
              name="difficulty"
              id=""
            >
              <option value="">Difficulty </option>
              <option value="1">Level of Difficulty 1 </option>
              <option value="2">Level of Difficulty 2 </option>
              <option value="3">Level of Difficulty 3 </option>
              <option value="4">Level of Difficulty 4 </option>
              <option value="5">Level of Difficulty 5 </option>
            </select>
          </div>
          <div>
            {errors.duration && (
              <div className={s.error}>{errors.duration} </div>
            )}
            <label>Duration :</label>
            <input
              required
              placeholder="Duration in hours"
              type="number"
              value={input.duration}
              name="duration"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div>
            {errors.season && <div className={s.error}>{errors.season}</div>}
            <label>Season :</label>
            <select required onChange={(e) => handleCheck(e)}>
              <option value="">Select season</option>
              <option value="Summer">Summer</option>
              <option value="Autum">Autum</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
          </div>
          <div className={s.countries}>
            <select required onChange={(e) => handleSelect(e)}>
              <option>Select countries</option>
              {country.map((i) => (
                <option value={i.id}>{i.name}</option>
              ))}
            </select>
          </div>

          <div className={s.countryC}>
            {input.countries.map((e) => (
              <div className={s.country} key={e}>
                <div>{e}</div>
                <button onClick={() => handleDelete(e)} className={s.delete}>
                  x
                </button>
              </div>
            ))}
          </div>
          <button className={s.btn} type="submit">
            Create
          </button>
          <button
            className={s.btn}
            onClick={(e) => {
              handleClick(e);
            }}
            type="submit"
          >
            CREATE A NEW ONE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActivityCreate;
