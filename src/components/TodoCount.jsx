import React from 'react';
import '../styles/TodoCount.css'
import { TodoContext } from '../context/TodoContext';

function TodoCount({ total, completed, message }) {
  const {
    totalTodos,
    completedTodos,
    msgCongratulations
  } = React.useContext(TodoContext)
  return (
    <h1 className='TodoCounter'>Todo Count
      {totalTodos === completedTodos && totalTodos > 0 ? (<p>{msgCongratulations}</p>) : (<p>Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas</p>)}
    </h1>
  )
}








export { TodoCount };