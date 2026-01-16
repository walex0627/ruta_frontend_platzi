import React from 'react';
import {TodoUI} from './components/TodoUI'
import { TodoProvider } from './context/TodoContext';


const msgCongratulations = 'Felicitaciones completaste todas las tareas'



function App() {

  
  return (
      <TodoProvider>
        <TodoUI />
      </TodoProvider>
  );
}


export default App;
