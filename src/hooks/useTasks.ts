import { useState, useEffect } from 'react';
import { Task } from '../models/model';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]); 
  
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); 
    }
  }, []);

  const saveTasksToLocalStorage = (updatedTasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: +new Date(), 
      title,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask]; 
    setTasks(updatedTasks); 
    saveTasksToLocalStorage(updatedTasks); 
  };

  const toggleTaskCompletion = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return {
    tasks, 
    addTask, 
    toggleTaskCompletion, 
    deleteTask,
  };
};
