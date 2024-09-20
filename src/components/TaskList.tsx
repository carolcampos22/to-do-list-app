import { useTasks } from "../hooks/useTasks"
import { TaskItem } from "./TaskItem"

export const TaskList = () => {
    const {tasks, toggleTaskCompletion, deleteTask} = useTasks()

    return (
        <ul>
            {tasks.map(task => (
                <TaskItem 
                    key={task.id}
                    task={task}
                    onToggleCompletion={() => toggleTaskCompletion(task.id)}
                    onDelete={() => deleteTask(task.id)}
                />
            ))}
        </ul>
    )
}