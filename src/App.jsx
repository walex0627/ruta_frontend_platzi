import React from 'react';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoLoading } from './components/TodoLoading';
import { TodoError } from './components/TodoError';
import { EmptyTodo } from './components/TodoEmpty';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { useTodos } from './context/useTodos';
import { TodoHeader } from './components/TodoHeader';
import { TodoCount } from './components/TodoCount';
import { TodoSearch } from './components/TodoSearch';


const msgCongratulations = 'Felicitaciones completaste todas las tareas'



function App() {

  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    msgCongratulations,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos()

  return (
    <>
      <TodoHeader>
        <TodoCount totalTodos={totalTodos} completedTodos={completedTodos} msgCongratulations={msgCongratulations} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList>
        {loading &&
          (
            <>
              <TodoLoading />
              <TodoLoading />
              <TodoLoading />
            </>
          )
        }
        {error && <TodoError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodo />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />

        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}/>
        </Modal>
      )}
    </>
  );
}


export default App;
