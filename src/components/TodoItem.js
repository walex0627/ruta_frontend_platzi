function TodoItem(props) {
  return (
    <ul>
      <li>
        <span>V {props.completed}</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    </ul>
  );
}

export { TodoItem };