import { stopSubmit } from 'redux-form';
import {weatherAPI} from './../api/apiWeather';

const SET_WEATHER = 'SET_WEATHER';
const SET_ALL_CITY_INFO = 'SET_ALL_CITY_INFO';

let initialState = {
    weather: null,
    cityInfo: null
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action.weather
            }
        case SET_ALL_CITY_INFO:
            return {
                ...state,
                cityInfo: action.cityInfo
            }
        default:
            return state;
    }
}

export const setWeather = (weather) => {
    return {
        type: SET_WEATHER,
        weather
    }
}

export const setAllCityInfo = (cityInfo) => {
    return {
        type: SET_WEATHER,
        cityInfo
    }
}



    //  redux-thunk

export const setWeatherThunk = (cityName) => {
    return async (dispatch) => {
        const response = await weatherAPI.getWeather(cityName);
        if (response.status === 200) {
            dispatch(setWeather(response.data))
        }

    }
}


export default weatherReducer;