import styles from './TasksEmpty.module.css'

import clipboard from '../../assets/clipboard.svg'

export function TasksEmpty() {
  return (
    <article className={styles.tasksEmpty}>
      <div className={styles.tasksEmptyContainer}>
        <img src={clipboard} alt="Logo" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </article>
  )
}