import React from 'react';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoLoading } from './TodoLoading';
import { TodoError } from './TodoError';
import { EmptyTodo } from './TodoEmpty';
import { Modal } from './Modal';
import { TodoContext } from '../context/TodoContext';

function TodoUI(){
    // console.log(todos);
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCount />
            <TodoSearch />
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
            <CreateTodoButton />
            {openModal && (
                <Modal>
                    {/* <TodoForm /> */}
                </Modal>
            )}
        </>
    )
}

export { TodoUI };

