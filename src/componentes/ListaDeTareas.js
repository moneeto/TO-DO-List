import React, { useEffect, useState } from 'react'
import TareaFormulario from './TareaFormulario.js'
import Tarea from './Tareas.js'
import '../stylesheets/ListaDeTareas.css'

function ListaDeTareas() {
    
    const [tareas, setTareas] = useState(() => { // Esto es la lista del localStorage, setItem agrega a la lista, getItem trae de la lista
            const tareasGuardadas = window.localStorage.getItem("tareasData");
            return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
        });
    const [disabled, setDisabled] = useState(tareas.length <= 0);

        useEffect(() => {
            window.localStorage.setItem("tareasData", JSON.stringify(tareas));
          }, [tareas]);

          useEffect(() => {
            setDisabled(tareas.length <= 0);
          }, [tareas]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim()
            const tareasActualizadas = [tarea, ...tareas] // agrego la tarea que se pasa por parámetro a un nuevo arreglo de las tareas ya existentes con "...tareas"
            setTareas(tareasActualizadas)
                  
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    };

    

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {
                tarea.completada = !tarea.completada
            }
            return tarea;
        })
        setTareas(tareasActualizadas)
    };

    const eliminarTodasLasTareas = () => {
        let validador = window.confirm("This action will delete ALL your tasks. Do you want to continue?");
        if (validador) {
            if (tareas.length > 0) {
                setDisabled(true)
                const nuevaLista = [];
                localStorage.setItem('tareasData', JSON.stringify(nuevaLista)); // Actualiza localStorage con la nueva lista vacía
                setTareas(nuevaLista); // Actualiza el estado con la nueva lista vacía
            } else { 
                setDisabled(false)
            }
        }
        
    }

    
    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tarea-lista-contenedor'>
            <button 
            onClick={eliminarTodasLasTareas}
            disabled={disabled}
            className={disabled ? 'disabled' : 'boton-borrar'}>Delete all</button>
            {                                       // abrimos llaves porque necesitamos un metodo de javascript para arrays (".map")
                tareas.map((tarea) =>               // metodo que toma cada una de los OBJETOS en el ARRAY y las pasa como argumento para la función flecha.
                <Tarea                              //por cada OBJETO en el ARRAY pasado por argumento, se va a crear una nueva tarea con sus re| spectivas props
                key={tarea.id}
                id={tarea.id}    
                texto = {tarea.texto}
                completada = {tarea.completada}
                eliminarTarea = {eliminarTarea}
                completarTarea = {completarTarea} />
                )
            }
            </div>
        </>
    )
};

export default ListaDeTareas;