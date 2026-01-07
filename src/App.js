import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCount/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function TodoItem(){
  return(
    <li>
      <span>V</span>
      <p>Aprender React</p>
      <span>X</span>
    </li>
  );
}

function TodoCount(){
    return(
        <h1>Todo Count
            <h4>3 de 5 completados</h4>
        </h1>
    )
}


export default App;
