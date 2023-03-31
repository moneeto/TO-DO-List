import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function FormularioDeTarea(props){

    // 
    const [input, setInput] = useState('');
    const [textoAgregado, setTextoAgregado] = useState(false);
    // 



    const manejarCambio = e => {
        setInput(e.target.value);
        setTextoAgregado(true);
    };

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = { 
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
        textoAgregado ? setInput('') : manejarCambio();
    };

    // const eliminarTodasLasTareas = () => {
    //     if (lista.length > 0) {
    //         setDisabled(false)
    //         for (let i = lista.length - 1; i >= 0; i--) {
    //             lista.splice(i, 1);
    //         }
    //         localStorage.setItem('tareasData', JSON.stringify(lista));
    //         // window.location.reload();
            
    //     }
    //     else { 
    //         setDisabled(true)
    //     }

    // }

    return(
        <>
        <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input 
            className='input'
            type='text'
            placeholder='Make some lunch...'
            name='texto'
            onChange={manejarCambio}
            autoComplete='off'
            value={input}
            />
            <button 
            className='boton-tarea'>
                Add
            </button>
        </form>
        </>
    )
};

export default React.memo(FormularioDeTarea);