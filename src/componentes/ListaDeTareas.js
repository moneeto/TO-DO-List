import React, { useEffect, useState } from 'react'
import TareaFormulario from './TareaFormulario.js'
import Tarea from './Tareas.js'
import '../stylesheets/ListaDeTareas.css'

function ListaDeTareas() {

    const [tareas, setTareas] = useState(() => {
            const guardarTareas = window.localStorage.getItem("tareasData");
            if (guardarTareas) {
                return JSON.parse(guardarTareas)
            }
            else {
                return []
            }
        });
        

    useEffect(() => {
        window.localStorage.setItem("tareasData", JSON.stringify(tareas), [tareas])
    })

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

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tarea-lista-contenedor'>
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