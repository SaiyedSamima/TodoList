/* eslint-disable react/prop-types */
import styles from "../CSS/todoItems.module.css"
export default function TodoItems({item,todos,setTodos}){
    function handledelete(item){
        console.log("Delete button click",item)
        setTodos( todos.filter((todo)=>todo !== item))
    
    }
    function handleClick(name){
    const newArr =  todos.map((todo)=>
            todo.name === name ? {...todo, done:!todo.done} : todo

    )
    setTodos(newArr)
    console.log(todos)
    }

    const check = item.done ? styles.compelted : ""

    return (
        
        <>
        <div className={styles.item}>
        <div className={styles.itemsName}>
            <span className={check} onClick={()=>handleClick(item.name)}>{item.name}</span>
           
            <span>
                <button onClick={()=>handledelete(item)} className={styles.del}>X</button>
            </span>
        </div>
        </div>
        <hr className={styles.lines}/>
        </>
    )
}