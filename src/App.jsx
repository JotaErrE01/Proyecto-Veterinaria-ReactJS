import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import PropTypes from 'prop-types';

function App() {

  //citas en local storage
  const citasIniciales = JSON.parse(localStorage.getItem('citas')) || [];

  //arreglo de citas
  const [citas, setCitas] = useState(citasIniciales);

  //Use effect para realizar ciertas operaciones cuando el state cambia
  useEffect( _ => {
    const citasIniciales = JSON.parse(localStorage.getItem('citas')) || [];

    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }
    
  }, [citas]);//el arreglo de citas para indicar que solo se ejecute cuando citas cambie, si fuera un arreglo vacio se ejecutare una sola

  //función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    setCitas([...citas, cita]);
  }

  //Función que eliminar una cita por su id
  const eliminarCita = id => {
    setCitas(citas.filter( cita => cita.id !== id));
  }

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{citas.length === 0 ? 'No hay citas agregadas' : 'Administra tus Citas'}</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default App;
