
import React, { useState } from 'react';

const AddTodo = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            addTask({
                id: Date.now(),
                title: newTask,
                completed: false,
            });
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="new-task-input"
            />
            <button type="submit" className="add-task-button">
                Add Task
            </button>
        </form>
    );
};

export default AddTodo;
