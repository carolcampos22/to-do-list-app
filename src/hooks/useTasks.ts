import { useEffect, useState } from "react"
import { Task } from "../models/model"

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks")

        if (storedTasks) {
            setTasks(JSON.parse(storedTasks))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false
        }

        setTasks([...tasks, newTask])
    }

    const toggleTaskCompletion = (id: number) => {
        tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    }

    const deleteTask = (id: number) => {
        tasks.filter((task) => task.id !== id)
    }

    return { tasks, addTask, toggleTaskCompletion, deleteTask }
}