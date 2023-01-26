import styles from '../../App.module.css';
import { FiTrash2 } from 'react-icons/Fi';

interface TodosProps {
    id: string;
    title: string;
    isCompleted: Boolean;
    onChangeIsComplete: (id: string) => void;
    onDeleteTask: (id: string) => void;

}

export function Task({ id, title, isCompleted, onChangeIsComplete, onDeleteTask }: TodosProps) {

    function handleChangeIsComplete() {
        onChangeIsComplete(id);
    }

    function handleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        <div>
            <ul>
                <li key={id} className={styles.todos}>
                    <div className={styles.tasks}>

                        <input
                            title='checkbox'
                            type="checkbox"
                            id={id}
                            onClick={handleChangeIsComplete}
                        />

                        <label>
                            <p>{title}</p>
                        </label>
                        <button
                            type='button'
                            title='delete'
                            onClick={handleDeleteTask}

                        >
                            <FiTrash2 />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}