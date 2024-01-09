import React, { useState } from 'react'

export default function TodoList({ task, toggleCompletion, editTask, deleteTask }) {

    const [isEdting , setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.title);

    return (
        <div>
            <input type="checkbox" checked={task.completed} onChange={() => toggleCompletion(task.id)} />

        </div>
    )
}
