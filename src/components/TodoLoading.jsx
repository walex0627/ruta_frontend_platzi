import '../styles/TodoLoading.css'
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

function TodoLoading() {
  return (
    <div className='LoadingTodo-container'>
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
    </div>
  )
}

export { TodoLoading };