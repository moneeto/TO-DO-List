import './App.css'
import './stylesheets/tareas.css'
import './stylesheets/TareaFormulario.css'
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
        <h1 className='titulo-app'>Task Manager</h1>      
      <div className='contenedor-instrucciones'>
        <h2 className='instrucciones'>How it works?</h2>
        <ul>
          <li><p>Start typing your tasks to do, then press the <b>add</b> button.</p></li>
          <li><p>Then, you can mark as <b>completed</b> clicking on the same task.</p></li>
        </ul>

      </div>
      
      <div className='tareas-lista-principal'>
        <h1>My tasks</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
};

export default App;
