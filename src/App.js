import logo from './platzi.webp';
import React from 'react';
import './App.css';
import {TodoCount} from './components/TodoCount';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';

const defaultTodos=[
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Manejar con el Rayo Mcqueen', completed : false},
  {text: 'Escuchar Mora', completed : false}

]

function App() {
  return (
    <React.Fragment>
      <TodoCount total={25} completed={16} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
