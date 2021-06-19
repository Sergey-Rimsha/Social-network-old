import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {setWeatherThunk} from './../../redux/weatherReducer';
import Preloader from '../common/Preloader/Preloader';
import style from './weather.module.css';


const WeatherContainer = (props) => {

    const [weatherData, setWeatherData] = useState("props");
    const [nameCity, setNameCity] = useState("props.weather.name");
    const [temp, setTemp] = useState("props.weather.main.temp");
    const [iconWeather, setIconWeather] = useState('icon');
    const [citySearch, setCitySearch] = useState('');

    useEffect(() => {
        try {
            setWeatherData(props);
            setNameCity(props.weather.name);
            setTemp(props.weather.main.temp.toFixed(0));
            setIconWeather(`https://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`)
            console.log('try'); 
            console.log(weatherData); 
        } catch {
            props.setWeatherThunk('London') 
            console.log('catch')
        }
        console.log('reloaded_useEffect')
    }, [props, weatherData]);

    const getSearchCityName = () => {
        props.setWeatherThunk(citySearch); 
        console.log(citySearch) 
        setCitySearch('') 
    }

    if (!props.weather) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={style.wraper} >
            <div className={style.wraperSearch} >
                <div className={style.searchInput} >
                    <input onChange={(e) => setCitySearch(e.target.value)} value={citySearch} placeholder='city name' type="text" />
                </div>
                <div className={style.searchBtn}>
                    <button onClick={() => getSearchCityName()} >Search</button>
                </div>
            </div>
            <span>Weather City: </span>
            {nameCity || "city"}
            <div>
                <span>Temp: </span>
                {temp} &#8451;
                <div>
                    <img src={iconWeather} alt='icon weather'></img>
                </div>
            </div>  
        </div>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather.weather
});

export default compose(
    connect(mapStateToProps, {setWeatherThunk}),
)(WeatherContainer);
