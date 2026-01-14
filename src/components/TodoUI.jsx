import {TodoCount} from './TodoCount';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

function TodoUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    msgCongratulations,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error
}) {

    // console.log(todos);
    

    return (
        <>
            <TodoCount total={totalTodos} completed={completedTodos} message={msgCongratulations} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
            {loading && <p>Cargando...</p>}
            {error && <p>Hubo un error</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea tu primer tarea</p>}

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
        </>
    )
}

export { TodoUI };

