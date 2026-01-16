import '../styles/EmptyTodo.css'
import React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
function EmptyTodo() {
  return (
    <>
      <AddTaskIcon className='Icon Icon-empty' fontSize='large'/>
      <p>Crea tu primer tarea</p>
    </>
  )
}

export { EmptyTodo };