import '../styles/TodoItem.css'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
function TodoItem(props) {
  return (
      <li className='TodoItem'>
        <CheckIcon onClick={props.onComplete} className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}/>
        {/* Lo dejo comentado pq ando probando material ui
        <span onClick= {props.onComplete} className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>v 
            {props.completed}
            </span> */}
        <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon onClick={props.onDelete} className='Icon Icon-delete'/>
        {/* Lo dejo comentado pq ando probando material ui
        <span onClick={props.onDelete} className='Icon Icon-delete'>X</span> */}
      </li>
  );
}

export { TodoItem };