import {weatherAPI} from './../api/apiWeather';

const SET_WEATHER = 'SET_WEATHER';

let initialState = {
    weather: null,
}

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action.weather
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

    //  redux-thunk

export const setWeatherThunk = (weather) => {
    return async (dispatch) => {
        const response = await weatherAPI.getWeather(weather);
        if (response.status === 200) {
            dispatch(setWeather(response.data))
            console.log('dispatch')
            console.log(response.data)
        } else {
            console.log(`Weather API error`);
        }
    }
}


export default weatherReducer;