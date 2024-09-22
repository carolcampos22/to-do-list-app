import { useState } from "react";
import styles from "../app/styles/Modal.module.scss"

interface AddTaskModalProps {
  onAdd: (title: string) => void;
  onClose: () => void;
}

export const AddTaskModal = ({ onAdd, onClose }: AddTaskModalProps) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAdd(taskTitle);
      setTaskTitle("");
      onClose();
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <h2 className={styles.new_task_paragraph}>Nova Tarefa</h2>
        <div className={styles.input_task_container}>
          <label>Título</label>
          <input
            className={styles.input_task}
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Digite"
          />
        </div>
        <div className={styles.buttons_container}>          
          <button className={styles.cancel_button} onClick={onClose}>Cancelar</button>
          <button className={styles.add_task_button} onClick={handleAddTask}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};


