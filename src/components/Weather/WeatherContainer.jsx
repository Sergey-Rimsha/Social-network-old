import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {setWeatherThunk} from './../../redux/weatherReducer';

const WeatherContainer = (props) => {

    let [state, setState] = useState(props.weather)

    useEffect(() => {
        console.log('render')
        props.setWeatherThunk()
        // console.log(props.weather)
        // console.log(state)
    }, []);

    const weatherApi = () => {
        props.setWeatherThunk()
        setState(props.weather);
        console.log('get API')
    }

    return (
        <div>
            Weather City:
            {props.weather.name}
            <button onClick={() => weatherApi()} >getWeather</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather.weather
});

export default compose(
    connect(mapStateToProps, {setWeatherThunk}),
)(WeatherContainer);


// export default compose(
//     connect(mapStateToProps, {setUserApi, setStatus, getStatus, savePhoto, saveProfile}),
//     withRouter,
//     withAuthRedirect,
// )(ProfileUsersWrap);

// export default WeatherContainer;