function TodoCount() {
  return (
    <h1>Todo Count
      <p>3 de 5 completados</p>
    </h1>


  )
}

function TodoItem() {
  return (
    <ul>
      <li>
        <span>V</span>
        <p>Aprender React</p>
        <span>X</span>
      </li>
    </ul>
  );
}


function TodoSearch() {
  return (
    <input></input>
  )
}

function TodoList(props) {
  return (
    <ul>
      {props.children}
    </ul>
  )

}

function CreateTodoButton(){
  return (
    <button>Crear Tarea</button>
  )
}

export { TodoCount, TodoItem, TodoSearch, TodoList, CreateTodoButton };