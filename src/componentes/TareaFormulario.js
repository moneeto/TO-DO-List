import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function FormularioDeTarea(props){


    const [input, setInput] = useState('');


    const manejarCambio = e => {
        setInput(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = { 
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
        
    };



    return(
        <>
        <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input 
            className='input'
            type='text'
            placeholder='Make some launch...'
            name='texto'
            onChange={manejarCambio}
            autoComplete='off'
            />
            <button className='boton-tarea'>
                Add
            </button>
        </form>
        </>
    )
};

export default FormularioDeTarea;