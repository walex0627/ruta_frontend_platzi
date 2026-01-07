import logo from './platzi.webp';
import './App.css';
import {TodoCount, TodoItem, TodoSearch, TodoList, CreateTodoButton} from './components/Todo';
function App() {
  return (
    <div className="App">
      <TodoCount/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreateTodoButton/>
    </div>
  );
}


export default App;
