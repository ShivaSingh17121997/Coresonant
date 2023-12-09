

import React, { useState } from 'react';

const TodoItem = ({ task, toggleCompletion, editTask, deleteTask }) => {
    const [isEditing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.title);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        editTask(task.id, editedTask);
        setEditing(false);
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                className="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
            />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        className="edit-input"
                    />
                    <button onClick={handleSave} className="save-button">
                        Save
                    </button>
                </>
            ) : (
                <>
                    <span
                        className="task-title"
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    >
                        {task.title}
                    </span>
                    <button onClick={handleEdit} className="edit-button">
                        Edit
                    </button>
                </>
            )}
            <button onClick={() => deleteTask(task.id)} className="delete-button">
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
