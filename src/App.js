import './App.css';
import Panel from './Components/Panel/Panel';
import Nav from './Components/Nav/Nav';
import { useState } from 'react';
import { Route, Switch } from 'react-router';
import NavAbout from './Components/NavAbout/NavAbout';
import Ciudad from './Components/Ciudad/Ciudad';



function App() {
  const [ciudades, setCiudades] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
  
  const onSearch = (nombreCiudad) =>{
    if (nombreCiudad === 'Diego') nombreCiudad = 'new york'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data =>{
        if(data.cod === 200){
          const existe = ciudades.find(ciudad => ciudad.id === data.id);
          if(!existe) setCiudades([data, ...ciudades]);
        }
        else{ alert('No se encuentra la ciudad especificada')}
    } )
  }

  const onClose = (id)=>{
    setCiudades(ciudades.filter(ciudad => ciudad.id !== id))
  }

  const detallando = (id) =>{
    let detallada = ciudades.find(ciudad => ciudad.id === parseInt(id))
      return detallada 
  }

  return (
    <div>
      <Switch>
        <Route exact path ='/'>
          <div>
            <Nav onSearch = {onSearch}/> 
          </div>
          <div className = 'panel'>
            <Panel onClose = {onClose} ciudades = {ciudades}/>
          </div>
        </Route>
        <Route 
          exact path = '/ciudad/:ciudadId'
          render = {({match})=>(
              <>
                <NavAbout/>
                <Ciudad ciudad = {detallando(match.params.ciudadId)}/>
                
              </>
            )
          }
        />
      </Switch>
    </div>
  );
}

export default App;
