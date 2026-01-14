import React from 'react';
import {TodoUI} from './components/TodoUI'
import {useLocalStorage} from './hooks/useLocalStorage.hook';


const msgCongratulations = 'Felicitaciones completaste todas las tareas'



function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan tareas de ' + searchValue);
  
  const [todos, saveTodos] = useLocalStorage('Todos_v1', []);
  const completedTodos = todos.filter(todos => !!todos.completed === true).length
  const totalTodos = todos.length

  console.log('log 1')
  // React.useEffect(()=>{
  //   console.log('looooooooog 2')
  // })
  
  // React.useEffect(()=>{
  //   console.log('looooooooog 2')
  // },[])

  React.useEffect(()=>{
    console.log('looooooooog 2')
  },[totalTodos])

  console.log('log 3')
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
  return todoText.includes(searchText)
  })


  const completeTodo = (text)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)  
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

    const deleteTodo = (text)=>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }
  
  return (
      <TodoUI
      completedTodos= {completedTodos}
      totalTodos= {totalTodos}
      searchValue= {searchValue}
      msgCongratulations={msgCongratulations}
      setSearchValue= {setSearchValue}
      searchedTodos= {searchedTodos}
      completeTodo= {completeTodo}
      deleteTodo= {deleteTodo}
      />
  );
}


export default App;
