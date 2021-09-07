const Task = ({task, onDelete, ontoggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => ontoggle(task.id)}>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            
        </div>
    )
}


export default Task;
