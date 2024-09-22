import { useTasks } from "../hooks/useTasks";
import { TaskItem } from "./TaskItem";
import { AddTaskModal } from "./AddTaskModal";
import { useState } from "react";
import styles from "../app/styles/TaskList.module.scss"

export const TaskList = () => {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTasks(); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>     
      
      {isModalOpen && (
        <AddTaskModal 
          onAdd={addTask} 
          onClose={handleCloseModal} 
        />
      )}

      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleCompletion={() => toggleTaskCompletion(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
      <button className={styles.add_task} onClick={handleOpenModal}>Adicionar nova tarefa</button>
    </>
  );
};
