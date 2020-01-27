import React from 'react';



const Task = (props) => {
    const { task, removeTask } = props;
    return (
        <>
        <div className="task" style={{ textDecoration: task.completed ? 'line-through': ''}}>
            {task.title}
        </div>
        <div className='remove'>
        <button style={{ background: 'red' }} onClick={() => removeTask(task.index)}>x</button>
        </div>
        </>
    )
};


export default Task;