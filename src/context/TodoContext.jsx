import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.hook';
const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const msgCongratulations = 'Felicitaciones completaste todas las tareas'
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage('Todos_v1', []);
    const completedTodos = todos.filter(todos => !!todos.completed === true).length
    const totalTodos = todos.length

    // console.log('log 1')
    // React.useEffect(()=>{
    //   console.log('looooooooog 2')
    // })

    // React.useEffect(()=>{
    //   console.log('looooooooog 2')
    // },[])

    // React.useEffect(()=>{
    //   console.log('looooooooog 2')
    // },[totalTodos])
    // console.log('log 3')
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText)
    })

    const addTodo = (text) =>{
        const newTodos = [...todos]
        newTodos.push({
        text,
        completed: false,

        });
        saveTodos(newTodos)
    }

    const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
    }
    return (

        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            msgCongratulations,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}



export { TodoContext, TodoProvider }