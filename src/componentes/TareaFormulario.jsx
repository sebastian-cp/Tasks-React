import React, { useState } from 'react';
import '../css/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
        <label for='tarea' class='tarea__label'>Enter the new task</label>
      <input 
        className='tarea-input'
        type='text'
        placeholder='write a task'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Add 
      </button>
    </form>
  );
}

export default TareaFormulario;
