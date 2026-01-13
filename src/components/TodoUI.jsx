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
    deleteTodo
}) {
    return (
        <>
            <TodoCount total={totalTodos} completed={completedTodos} message={msgCongratulations} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
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

