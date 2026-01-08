import '../styles/TodoCount.css'

function TodoCount({total, completed, message}) {
  return (
    <h1 className='TodoCounter'>Todo Count
      {total === completed && total > 0 ? (<p>{message}</p>): (<p>has completado <span>{completed}</span> de <span>{total}</span> tareas</p>)}
    </h1>
  )
}








export { TodoCount };