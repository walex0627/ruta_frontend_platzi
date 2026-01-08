import '../styles/TodoSearch.css'
function TodoSearch() {
  return (
    <input placeholder="Cortar cebolla" className="TodoSearch"
    onChange={(event)=>{
      console.log(event);
      console.log(event.target.value);
      console.log('estas escribiendo en el TodoSerch');
    }}></input>
  )
}

export { TodoSearch };