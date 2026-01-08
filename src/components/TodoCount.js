import '../styles/TodoCount.css'

function TodoCount({total, completed}) {
  return (
    <h1 className='TodoCounter'>Todo Count
      <p>has completado <span>{completed}</span> de <span>{total}</span> tareas</p>
    </h1>
  )
}








export { TodoCount };