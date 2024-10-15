import { useState } from "react";
import style from "../CSS/Form.module.css";

export default function Form({ setTodos, todos }) {
//   const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }
  return (
    <div>
      <form className={style.todoform} onSubmit={handleSubmit}>
        <div className={style.todoItems}>
          <input
            className={style.modernInput}
            onChange={(e) => setTodo({name:e.target.value,done:false})}
            type="text"
            value={todo.name}
            placeholder="Enter todo items..."
          />

          <button type="submit" className={style.btn}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
