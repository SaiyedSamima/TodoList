import Footer from "./footer";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo(){
    const [todos,setTodos] = useState([]);
    const completedTods = todos.filter((todo)=>todo.done).length
    const totalTodos = todos.length
    return(
        <>
        <div>
           <Form todos={todos} setTodos={setTodos}/>
           <TodoList todos={todos}
           setTodos={setTodos}/>
           <Footer completedTodos = {completedTods} totalTodos={totalTodos}/>
        </div>
        </>
    );
}