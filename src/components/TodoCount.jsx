import React from 'react';
import '../styles/TodoCount.css'

function TodoCount({ totalTodos, completedTodos, msgCongratulations, loading }) {

  return (
    <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}
    >Todo Count
      {totalTodos === completedTodos && totalTodos > 0 ? (<p>{msgCongratulations}</p>) : (<p>Haz completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas</p>)}
    </h1>
  )
}








export { TodoCount };