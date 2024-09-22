"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { useTasks } from "../hooks/useTasks";
import { TaskList } from "../components/TaskList";
import { AddTaskModal } from "../components/AddTaskModal";
import styles from "../app/styles/page.module.scss"

export default function Home() {
  const { addTask } = useTasks();
  const [showAddModal, setShowAddModal] = useState(false);

  return (

    <>
      <Header />
      <div className={styles.container}>

        <div>
          <p>Suas tarefas de hoje</p>


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

        <div>
          <p>Tarefas finalizadas</p>
        </div>
      </div>

    </>
  );
}