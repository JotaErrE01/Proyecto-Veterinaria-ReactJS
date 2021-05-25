import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //arreglo de citas
  const [citas, setCitas] = useState([]);

  //función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    setCitas([...citas, cita]);
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
            <h2>Administra tus Citas</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
