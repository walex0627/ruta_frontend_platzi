import '../styles/CreateTodoButton.css'

function CreateTodoButton(){
  return (
    <button className="createTodoButton" onClick={(event)=>{console.log('le diste click')
      console.log(event)
      console.log(event.target)
    }}>Crear Tarea</button>
  )
}
export { CreateTodoButton };