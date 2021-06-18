import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {setWeatherThunk} from './../../redux/weatherReducer';
import Preloader from '../common/Preloader/Preloader';


// class WeatherContainer extends React.Component {
//     componentDidMount() {
//         this.props.setWeatherThunk()
//         console.log(this.props)
//         console.log('componentDidMount')
//         console.log(this.props.name)
        
//     }

//     componentDidUpdate() {
//         if (this.props.weather === null) {
//             return <Preloader />
//         } else {

//         }
//     }


//     render() {
//         return (
//             <div>
//                 Weather City:
//                 {this.props.name && "city"}
//                 <button >getWeather</button>
//             </div>
//         )
//     }
// }

const WeatherContainer = (props) => {

    const [weather, setWeather] = useState("props.weather");
    const [nameCity, setNameCity] = useState("props.weather.name");
    const [temp, setTemp] = useState("props.weather.main.temp");

    useEffect(() => {
        console.log('render')
        props.setWeatherThunk()     
    }, []);

    useEffect(() => {
        try {
            setNameCity(props.weather.name);
            setTemp(props.weather.main.temp);
            setWeather(props.weather);
            console.log('try') 
        } catch {
            console.log('catch')
        }
        console.log('reloaded_useEffect')
    }, [props])

    if (!props.weather) {
        return (
            <Preloader />
        )
    }
    return (
        <div>
            <span>Weather City: </span>
            {nameCity || "city"}
            <div>
                <span>Temp: </span>
                {temp}
            </div>
            <button>getWeather</button>
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