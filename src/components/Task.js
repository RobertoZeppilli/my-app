import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onUpdate }) => {
    
    return (
        <div onDoubleClick={() => onUpdate(task.id)} className={task.reminder ? 'task reminder' : 'task'}>
            <div className="task-info">
                <h2 className="task-name">{task.task}</h2>
                <p className="task-date">{task.data}</p>
            </div>
            <div className="delete-icon">
                <FaTimes className="delete" onClick={() => onDelete(task.id)}></FaTimes>
            </div>
        </div>
    )
}

export default Task
