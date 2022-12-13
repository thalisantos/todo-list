import { AiOutlinePlusCircle } from 'react-icons/Ai';

import styles from './App.module.css'
import { Header } from './Components/Header';
import './global.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.contentContainer}>
        <form
          // onSubmit={} 
          className={styles.searchForm}
        >
          <input
            type="text"
            className={styles.searchInput}
            name="searchText"
            placeholder="Adicione uma nova tarefa"
          //  value={}
          //   onChange={}
          />
          <footer>
            <button className={styles.searchButton} type="submit">Criar<AiOutlinePlusCircle /></button>
          </footer>
        </form>


        <div className={styles.tasksControll}>
          <p className={styles.tasksCreated}>Tarefas criadas<button></button></p>
          <p className={styles.tasksDone}>Concluídas<button></button></p>
          <hr className=""></hr>

        </div>



      </div>
    </>
  )
}

