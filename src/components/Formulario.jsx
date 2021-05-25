import React, { Fragment, useState } from 'react';
import { nanoid } from 'nanoid';

const Formulario = ({crearCita}) => {

    //crear State de cita
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //state de mensaje
    const [mensaje, setMensaje] = useState(false);

    //actualizar state
    const handleChange = (e) => {
        setCita({...cita, [e.target.name]: e.target.value});
    }

    //extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //validar formulario
    const validarFormulario = e => {
        e.preventDefault();
        //validar
        if(!mascota.trim() || !propietario.trim() || !fecha.trim() || !hora.trim() || !sintomas.trim()){
            setMensaje(true);
            // setTimeout(() => {
            //     setMensaje(false)
            // }, 3000);
            return;
        }

        //eliminar mensaje error
        setMensaje(false);

        //asignar un ID
        cita.id = nanoid()

        //crear la cita
        crearCita(cita);

        //reiniciar el form
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return (         
        <Fragment>
            <h2>Crear Cita</h2>

            {mensaje ? <p className="alerta-error">Todos Los Campos son Obligatorios</p> : null}

            <form 
                onSubmit={validarFormulario}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onInput={handleChange}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input 
                    type="text" 
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño"
                    onInput={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date" 
                    name="fecha"
                    className="u-full-width"
                    onInput={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time" 
                    name="hora"
                    className="u-full-width"
                    onInput={handleChange}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas" 
                    onInput={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;