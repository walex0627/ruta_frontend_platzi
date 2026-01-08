import React from 'react';
import {TodoCount} from './components/TodoCount';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';

const defaultTodos=[
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: true},
  {text: 'Manejar con el Rayo Mcqueen', completed : false},
  {text: 'Escuchar Mora', completed : true},
  {text: 'Ver one piece', completed: false}

]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan tareas de ' + searchValue);
  
  const [todos, setTodos] = React.useState(defaultTodos);
  console.log(todos);
  const completedTodos = todos.filter(todos => !!todos.completed == true).length
  const totalTodos = todos.length
  


  return (
    <>
      <TodoCount total={totalTodos} completed={completedTodos} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}


export default App;
