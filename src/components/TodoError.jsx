import '../styles/TodoError.css'
import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';

function TodoError() {
  return (
    <>
      <ErrorIcon className='Icon Icon-error' fontSize='large'/>
      <p>Algo salio mal</p>
    </>
  )
}

export { TodoError };