import React from 'react';
import {TodoCount} from './components/TodoCount';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';
import { DefaultContext } from 'react-icons';

// const defaultTodos=[
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tomar el curso de intro a React', completed: false},
//   {text: 'Llorar con la llorona', completed: true},
//   {text: 'Manejar con el Rayo Mcqueen', completed : false},
//   {text: 'Escuchar Mora', completed : true},
//   {text: 'Ver one piece', completed: false}
// ]

// localStorage.setItem('Todos_v1', JSON.stringify(defaultTodos))
// localStorage.removeItem('Todos_v1')

const msgCongratulations = 'Felicitaciones completaste todas las tareas'

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName)
  
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  }else{
    parsedItem = JSON.parse(localStorageItem)
  }
  
  const [ item, setItem ] = React.useState(parsedItem)

    const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
  }

  return [item, saveItem]
}


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan tareas de ' + searchValue);
  
  const [todos, saveTodos] = useLocalStorage('Todos_v1', []);
  const completedTodos = todos.filter(todos => !!todos.completed == true).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
  return todoText.includes(searchText)
  })


  const completeTodo = (text)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text == text)  
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

    const deleteTodo = (text)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text == text)
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }
  
  return (
    <>
      <TodoCount total={totalTodos} completed={completedTodos} message={msgCongratulations} />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() =>completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}/>
          
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}


export default App;
