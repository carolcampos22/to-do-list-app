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
      onAdd(taskTitle); // Chama a função `onAdd` passada pelo pai (TaskList)
      setTaskTitle(""); // Limpa o campo de input
      onClose(); // Fecha o modal
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <h2>Adicionar Tarefa</h2>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Digite o nome da tarefa"
        />
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};


