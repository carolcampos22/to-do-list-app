"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { useTasks } from "../hooks/useTasks";
import { TaskList } from "../components/TaskList";
import { AddTaskModal } from "../components/AddTaskModal";
export default function Home() {
  const { addTask } = useTasks();
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div>
      <Header />
      <h1>To-Do List</h1>
      
      
      <TaskList />

      {showAddModal && (
        <AddTaskModal
          onAdd={(title) => {
            addTask(title);
            setShowAddModal(false);
          }}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}