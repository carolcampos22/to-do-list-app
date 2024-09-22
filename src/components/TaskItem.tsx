import { Task } from '../models/model';
import { useState } from 'react';
import { ConfirmDeleteModal } from './ConfirmDeleteModal';
import styles from "../app/styles/TaskItem.module.scss";

type TaskItemProps = {
  task: Task;
  onToggleCompletion: () => void;
  onDelete: () => void;
};

export const TaskItem = ({ task, onToggleCompletion, onDelete }: TaskItemProps) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = () => {
    onDelete(); 
    setShowConfirmModal(false);
  };

  return (
    <>
      <li className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
        <input type="checkbox" checked={task.completed} onChange={onToggleCompletion} />
        {task.title}
        <button onClick={() => setShowConfirmModal(true)}>🗑️</button>
      </li>

      {showConfirmModal && (
        <ConfirmDeleteModal
          onConfirm={handleDelete}
          onCancel={() => setShowConfirmModal(false)} 
        />
      )}
    </>
  );
};
