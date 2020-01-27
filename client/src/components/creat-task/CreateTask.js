import React, { useState} from 'react';



const CreateTask = (props) => {
    const [item, setItem] = useState('');
 const { addTask } = props;
        const handleSubmit = e => {
            e.preventDefault();
            if (!item) {
             return;
            }

            addTask(item);
            setItem('');
        }

        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={item}
                    placeholder="Add a new task"
                    onChange={e => setItem(e.target.value)}
                />
            </form>
        );
}
export default CreateTask;