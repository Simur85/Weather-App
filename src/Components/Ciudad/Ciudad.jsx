import React from 'react';
import style from './Ciudad.module.css';

export default function Ciudad({ciudad}) {
    return (
        <div className = {style.ciudad}>
            <div className = {style.nombreBand}>
                <h1 className = {style.tituloC}>{ciudad.name}</h1>
                <img className = {style.img} src={`https://flagcdn.com/160x120/${(ciudad.sys.country).toLowerCase()}.png`} alt = 'Not found'></img>
            </div>
            <div className = {style.datos}>
                <div className = {style.info}>
                    <h4 className = {style.titulos}>Actual temperature:</h4>
                    <p className = {style.numeros}>{ciudad.main.temp} °C</p>
                </div>
                <div className = {style.info}>
                    <h4 className = {style.titulos}>Feels like:</h4>
                    <p className = {style.numeros}>{ciudad.main.feels_like} °C</p>
                </div>
                <div className = {style.info}>
                    <h4 className = {style.titulos}>Minimun expected:</h4>
                    <p className = {style.numeros}>{ciudad.main.temp_min} °C</p>
                </div>
                <div className = {style.info}>
                    <h4 className = {style.titulos}>Maximun expected:</h4>
                    <p className = {style.numeros}>{ciudad.main.temp_max} °C</p>
                </div>
                <div className = {style.info}>
                    <h4 className = {style.titulos}>Humidity:</h4>
                    <p className = {style.numeros}>{ciudad.main.humidity} %</p>
                </div>
                <div className = {style.info}>
                    <h4 className = {style.titulos}>Wind Speed:</h4>
                    <p className = {style.numeros}>{ciudad.wind.speed} Km/h</p>
                </div>
            </div>
        </div>
    )
}
