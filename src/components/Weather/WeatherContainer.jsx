import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {setWeatherThunk} from './../../redux/weatherReducer';
import Preloader from '../common/Preloader/Preloader';


class WeatherContainer extends React.Component {
    componentDidMount() {
        this.props.setWeatherThunk()
        console.log(this.props)
        console.log('componentDidMount')
        console.log(this.props.name)
        
    }


    render() {
        return (
            <div>
                Weather City:
                {this.props.name && "city"}
                <button >getWeather</button>
            </div>
        )
    }
}

// const WeatherContainer = (props) => {

//     // let [weather, setWeather] = useState('props.weather')
//     // let [nameCity, setNameCity] = useState("props.weather.name")

//     // useEffect(() => {
//     //     console.log('render')
//     //     props.setWeatherThunk()
//     //     // setWeather({...props.weather})
        
//     // }, []);

//     // useEffect(() => {
//     //     // setNameCity(props.weather.name)
//     //     console.log('reloaded_useEffect')
//     // }, [props])

//     const weatherApi = () => {
//         // setWeather({...props.weather})
//         props.setWeatherThunk()
//         console.log(props.weather)
//         // console.log(nameCity)
//         // setNameCity(props.weather.name)
//         console.log('get API')
//     }

//     if (!props.weather) {
//         return (
//             <Preloader />
//         )
//     } 

//     return (
//         <div>
//             Weather City:
//             {props.weather.name || "city"}
//             <button onClick={() => weatherApi()} >getWeather</button>
//         </div>
//     )
// }

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