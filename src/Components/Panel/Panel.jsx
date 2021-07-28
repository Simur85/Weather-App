import React from 'react'
import Card from '../Card/Card';
import style from './Panel.module.css'

export default function Panel({ciudades, onClose}) {
    return (
        <div className = {style.tajetas} >
            {
                ciudades.map((ciudad) => <Card 
                    name = {ciudad.name}
                    temp = {ciudad.main.temp}
                    key = {ciudad.id}
                    img = {ciudad.weather[0].icon}
                    flag = {ciudad.sys.country}
                    onClose = {onClose}
                    id = {ciudad.id}
                    
                />)
            }
        </div>
    )
}
