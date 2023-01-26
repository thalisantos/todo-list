import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/Ai';
import { v4 as uuidv4 } from 'uuid';
import { FiTrash2 } from 'react-icons/Fi';


import styles from './App.module.css'
import { Header } from './Components/Header';
import { Task } from './Components/Task';
import './global.css'
import { TasksEmpty } from './Components/TasksEmpty';


interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [completedTasks, setCompletedTasks] = useState(Number)

  const [textTask, setTaskText] = useState('')

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const createNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (!textTask) {
      alert('O campo não pode ser vazio.');
      return
    }
    
    const newTask =
    {
      id: uuidv4(),
      title: textTask,
      isCompleted: false,
      // checked: false
    };

    setTasks([...tasks, newTask])

    setTaskText('')
  }

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value)
  };

  function handleCompletedTasks() {
    let count = 0;
    tasks.filter(task => {
      if (task.isCompleted === true) {
        count++;
      }
    })
    setCompletedTasks(count)
  };

  function changeIsComplete(id: string) {
    tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
    })
    handleCompletedTasks();
  };

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    })

    tasks.map(task => {
      if (task.id === id && task.isCompleted === true) {
        changeIsComplete(id)
      }
    })

    setTasks(tasksWithoutDeletedOne)
  };


  return (
    <>
      <Header />

      <div className={styles.searchContainer}>
        <form onSubmit={createNewTask} className={styles.searchForm}
        >
          <input
            type="text"
            className={styles.searchInput}
            name="taskText"
            placeholder="Adicione uma nova tarefa"
            value={textTask}
            onChange={handleTextChange}
          />
          <footer>
            <button className={styles.searchButton} type="submit">Criar<AiOutlinePlusCircle /></button>
          </footer>
        </form>
      </div>

      <div className={styles.tasksControll}>
        <p className={styles.tasksCreated}>Tarefas criadas
        <span>{tasks.length}</span>
        </p>
        <p className={styles.tasksDone}>Concluídas
        <span>{completedTasks}</span>
        </p>
      </div>

      {
        tasks.length > 0 ? (
          tasks.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                onChangeIsComplete={changeIsComplete}
                onDeleteTask={handleDeleteTask}
                isCompleted={task.isCompleted}
              />
            )
          })
        ) : (
          <TasksEmpty />

        )
      }

     


    </>
  )
}

