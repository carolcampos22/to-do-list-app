type TaskItemProps = {
    task: { id: number, title: string, completed: boolean }
    onToggleCompletion: () => void
    onDelete: () => void
}

export const TaskItem = ({ task, onToggleCompletion, onDelete }: TaskItemProps) => {
    return (
        <li className={task.completed ? "completed" : ""}>
        <input type="checkbox" checked={task.completed} onChange={onToggleCompletion} />
        {task.title}
        <button onClick={onDelete}>🗑️</button>
    </li>
    )
}