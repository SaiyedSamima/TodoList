import TodoItems from "./TodoItems";
import styles from "../CSS/todolist.module.css"

export default function TdodList({todos,setTodos}){
    const sortedTodos = todos.slice().sort((a,b)=> Number(a.done) - Number(b.done)) 
    return(
        <div className={styles.todolist}>
             {sortedTodos.map((item)=>(
            <TodoItems 
            key={item.name} 
            item={item} 
            todos={todos}
            setTodos={setTodos}/>
           ))}
        </div>
    );
}