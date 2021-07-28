import React from 'react'
import SearchBar from '../SerchBar/SearchBar'
import  style  from './Nav.module.css'




export default function Nav({onSearch}) {
    return (
        <div className = {style.contenedor}>
            <div className = {style.tituloSlogan}>
                <h1 className = {style.app}>The Weather App</h1>
                <h4 className = {style.slogan}>Maintain a little bit of summer, even in the middle of winter</h4>
            </div>
            <div className = {style.divSearch}>
                <div className = {style.iconSuport}>

                    <span className = {style.supported}>Supported by Henry</span>
                </div>
                <div className = {style.linkSearch}>
                    <SearchBar onSearch = {onSearch}/>
                </div>
            </div>
        </div>
    )
}
