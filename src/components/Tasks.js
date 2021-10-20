import React from 'react'
import Task from '../components/Task'

const Tasks = ({tasks, onDelete, onUpdate}) => {
    return (
        
        <>
            {tasks.map((task,index) => (
                <Task onUpdate={onUpdate} onDelete={onDelete} key={index} task={task} />
            ))}
        </>
    )
}

export default Tasks
