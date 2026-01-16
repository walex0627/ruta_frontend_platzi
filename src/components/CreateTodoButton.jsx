import '../styles/CreateTodoButton.css'

function CreateTodoButton({setOpenModal}){
  return (
    <button className="createTodoButton" 
      onClick = {()=> setOpenModal(state => !state)}>
      Crear Tarea</button>
  )
}
export { CreateTodoButton };