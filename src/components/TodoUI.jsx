import React from 'react';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoLoading } from './TodoLoading';
import { TodoError } from './TodoError';
import { EmptyTodo } from './TodoEmpty';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { TodoContext } from '../context/TodoContext';
import { TodoHeader } from './TodoHeader';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';

function TodoUI() {
    // console.log(todos);
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
        setSearchValue
    } = React.useContext(TodoContext)

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
                    <TodoForm />
                </Modal>
            )}
        </>
    )
}

export { TodoUI };

