import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'


export default function Card({name, temp, flag, img, onClose,id}) {
    return (
        <div className = {style.ficha}>
            <div className = {style.divSuperior}>
                <div className = {style.divBoton}>
                    <button onClick = {()=>onClose(id)}>X</button>
                </div>
                <Link className = {style.link} to = {`/ciudad/${id}`}><h2 className = {style.nombre}>{name}</h2></Link>
                <div className = {style.marcoImagen}>
                    <img className = {style.imagen} src={`https://flagcdn.com/60x45/${(flag).toLowerCase()}.png`} alt = 'Not found'></img>
                </div>
            </div>
            <div className = {style.temp}>
                <p>Actual temperature:</p>
            </div>
            <div>
                <p className = {style.tempNum}>{temp} °C</p>
            </div>
            <div className = {style.divImg}>
                <p><img className = {style.img} src = {`https://openweathermap.org/img/wn/${img}@2x.png`}/></p>
            </div>
            
        </div>
    )
}
