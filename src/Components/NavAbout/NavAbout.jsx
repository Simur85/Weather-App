import React from 'react'
import { Link } from 'react-router-dom'
import  style  from './NavAbout.module.css'




export default function NavAbout({onSearch}) {
    return (
        <div className = {style.contenedor}>
            <div>
                <h1 className = {style.app}>The Weather App</h1>
                <h4 className = {style.slogan}>Maintain a little bit of summer, even in the middle of winter</h4>
            </div>
            <div className = {style.barra}>
                <div className = {style.divSearch}>

                    <span className = {style.suported}>Supported by Henry</span>
                </div>
                <div className = {style.home}>
                    <Link className = {style.about} to ='/'>Home</Link>
                </div>
            </div>
        </div>
    )
}
