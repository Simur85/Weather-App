import React from 'react'
import { useState } from 'react'
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
 
    const [ciudad,setCiudad] = useState('');

    const handleChange = (e)=>{
        setCiudad(e.target.value)
    }

    const handleSubmit = (e)=>{
        onSearch(ciudad);
        e.preventDefault();
        setCiudad('');
    }
    return (
        <div id = {style.contieneForm}>
            <form onSubmit = {handleSubmit}>
                <input id = {style.label} type = 'text' placeholder = 'Enter a city' onChange = {handleChange} value = {ciudad}></input>
                <input id = {style.boton} type = 'submit' value = 'Add'></input>
            </form>
        </div>
    )
}
 