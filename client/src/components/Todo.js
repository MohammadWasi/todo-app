import React, { useState} from 'react';
import Task from './task/Task'
import './Todo.css'
import CreateTask from './creat-task/CreateTask';




const Todo = () => {
    const tasklists = [
        {title: 'Do Leetcode exercises' , completed: true, id: 1},
        {title: 'Take Shower', completed: true, id: 2},
        {title: 'Have breakfast', completed: true, id: 3},
        {title: 'Go to office', completed: false, id: 4}
    ]
    const [tasks, setTask] = useState(tasklists);
    const addTask = (title) => {
         const newTasks = [...tasks, {title: title, completed: false} ];
         setTask(newTasks);
    }
    const removeTask = (index) => {
     const newTasks = [...tasks];
     newTasks.splice(index, 1);
     setTask(newTasks);
    }

    return (
        <div className='task-container'>
            <div className='task-list'>
            {tasks.map((item, index) => (
                <Task 
                 task={item}
                 key={index}
                 index={index}
                 removeTask={removeTask} 
                />
            ))}
            </div>
            <div className='add-task'>
                <CreateTask addTask={addTask}/>
            </div>
        </div>
    )
}
export default Todo;