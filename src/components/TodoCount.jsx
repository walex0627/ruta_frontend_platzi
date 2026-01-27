import React from 'react';
import '../styles/TodoCount.css'

function TodoCount({ totalTodos, completedTodos, msgCongratulations }) {

  return (
    <h1 className='TodoCounter'>Todo Count
      {totalTodos === completedTodos && totalTodos > 0 ? (<p>{msgCongratulations}</p>) : (<p>Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas</p>)}
    </h1>
  )
}








export { TodoCount };