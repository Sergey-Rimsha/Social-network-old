import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Field, reduxForm} from "redux-form";
import {setWeatherThunk} from './../../redux/weatherReducer';
import Preloader from '../common/Preloader/Preloader';
import style from './weather.module.css';
import { InputForm } from '../common/FormsControls/FormsControls';


const WeatherContainer = (props) => {

    const [weatherData, setWeatherData] = useState("props");
    const [nameCity, setNameCity] = useState("props.weather.name");
    const [temp, setTemp] = useState("props.weather.main.temp");
    const [iconWeather, setIconWeather] = useState('icon');
    const [citySearch, setCitySearch] = useState('');

    const onSubmit = (formData) => {
        props.setWeatherThunk(formData.cityName);
        formData.cityName = '';
    }

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

    if (!props.weather) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={style.wraper} >
            <div className={style.wraperSearch} >
                <WeatherReduxForm onSubmit={onSubmit} />
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



const WeatherForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.searchInput} >
                <Field name={'cityName'} 
                    type={'text'} 
                    component={InputForm} />
                <div className={style.searchBtn}>
                    <button>Search</button>
                </div>
            </div>            
                
        </form>
    )
}


const WeatherReduxForm = reduxForm({
    // a unique name for the form
    form: 'Weather'
  })(WeatherForm);
