import '../styles/TodoSearch.css'
import React from 'react';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log('los usuarios buscan tareas de ' + searchValue);
  
  return (
    <input placeholder="Cortar cebolla" className="TodoSearch"
    value={searchValue}
    onChange={(event)=>{
      setSearchValue(event.target.value);
    }}></input>
  )
}

export { TodoSearch };