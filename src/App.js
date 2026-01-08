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
  {text: 'Escuchar Mora', completed : true}

]

function App() {
  return (
    <>
      <TodoCount total={25} completed={16} />
      <TodoSearch/>

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
