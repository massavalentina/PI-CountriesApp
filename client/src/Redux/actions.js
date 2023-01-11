import axios from 'axios';
export const COUNTRIES = 'COUNTRIES';
export const BY_CONTINENTS = 'BY_CONTINENTS';
export const BY_ACTIVITY = 'BY_ACTIVITY';
export const ALPHABETICAL_ORDER = 'ALPHABETICAL_ORDER';
export const POPULATION_ORDER = 'POPULATION_ORDER';
export const SEARCH = 'SEARCH';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_DETAIL = 'GET_DETAIL';
export const SET_LOADING = 'SET_LOADING';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';

export const getAllActivities = () => {
	return async (dispatch) => {
		const { data } = await axios('/activities');
		return dispatch({
			type: GET_ACTIVITIES,
			payload: data,
		});
	};
};

export const getAllCountries = () => {
	// try{
	return async (dispatch) => {
		const { data } = await axios('/countries');
		return dispatch({
			type: COUNTRIES,
			payload: data,
		});
	};
// }
// catch(error){
// 	alert('Country Not Found');
// 	console.log(error)
// }
};

export const getDetail = (id) => {
	return async (dispatch) => {
		const { data } = await axios(`/countries/${id}`);
		return dispatch({
			type: GET_DETAIL,
			payload: data,
		});
	};
};



export function getCountryName(name) {
    return async function (dispatch) {
        try{
            const {data} = await axios(`/countries?name=${name}`)
            return dispatch({
                type: SEARCH,
                payload: data,
            })
        } catch(error){
            console.log(error)
        }
    }
};


 

export const createActivity = (payload) => {
	return async (dispatch) => {
		const res = await axios.post('/activities', payload);
		return dispatch({
			type: CREATE_ACTIVITY,
			res,
		});
	};
};

export const byContinents = (payload) => {
	return {
		type: BY_CONTINENTS,
		payload,
	};
};

export const byActivity = (payload) => {
	return {
		type: BY_ACTIVITY,
		payload,
	};
};

export const alphabeticalOrder = (payload) => {
	return {
		type: ALPHABETICAL_ORDER,
		payload,
	};
};

export const populationOrder = (payload) => {
	return {
		type: POPULATION_ORDER,
		payload,
	};
};

export function setLoading(payload) {
	return { type: SET_LOADING, payload };
}