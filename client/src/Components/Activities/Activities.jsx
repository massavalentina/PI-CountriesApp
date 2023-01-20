import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {deleteActivity, getAllActivities } from "../../Redux/actions";
import s from "./Activities.module.css";


const Activities = () => {

    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities);
    //   const [showModalAct, setShowModalAct] = useState(false);
    
    React.useEffect(() => {dispatch(getAllActivities())},
    [dispatch]);
    
    const handlerDelete = async (event, name) =>{
        event.preventDefault();
        dispatch(deleteActivity(name));    
    }
    // setShowModalAct(true);

    const handlerEdit =()=>{
       
           
    } 

  

    return(
        <div className={s.backgroundA} >

                {/* {showModalAct && (
                            <ModalAct setShowModalAct={setShowModalAct} showModalAct={showModalAct} />
                        )} */}

            <h1 className={s.titleA}>Activities available</h1>
            <div>
                <div className={s.text}>
                    <h2>Create your collection of activities for your new journeys!</h2>
                    <h2>You can delete them if you must and then add as many activities as you want on your board!</h2>
                </div>
                    

                    {activities.map(activity =>(
                    <div className={s.containerAA}>
                        <div className={s.containerA} >
                            <h3>{activity.name}</h3>
                            <p>{`Difficulty: ${activity.difficulty}/5`}</p>
                            <p>{`Duration: ${activity.duration}`}</p>
                            <p>{`Season: ${activity.season}`}</p>
                            {/* <h4>Countries:</h4>
                                {activity.countries?.map(countrie =>
                                    <p>{countrie.name}</p>
                                )} */}
                        <button className={s.buttonA} onClick={(event) => handlerDelete(event,activity.name)}>Delete</button>
                        <button className={s.buttonA} onClick={(event) => handlerEdit(event,activity.id)} >Edit</button>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}
export default Activities;