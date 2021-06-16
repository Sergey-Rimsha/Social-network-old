import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {setWeatherThunk} from './../../redux/weatherReducer';

const WeatherContainer = (props) => {

    let [state, setState] = useState()

    useEffect(() => {
        // props.setWeatherThunk();
        // console.log(props.weather)
        console.log(state)
    });


    return (
        <div>
            Weather
            {/* {props.weather} */}
            <button onClick={() => setState()} >getWeather</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather
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