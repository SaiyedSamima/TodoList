import styles from "../CSS/Footer.module.css";
export default function Footer({completedTodos,totalTodos}){
    return(
        <>
        <div className={styles.footer}>
            <span className={styles.item}>Completed Todos: {completedTodos}</span>
            <span className={styles.items}>Total Todos: {totalTodos}</span>
        </div>
        </>
    )
}