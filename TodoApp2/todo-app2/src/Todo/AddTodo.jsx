import React, { useState } from 'react'

export default function AddTodo({addTask}) {
    const [newTask, setNewTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(newTask.trim() != ""){
            addTask({
                id:Date.now(),
                title:newTask,
                completed:false
            })
        }
        setNewTask("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='Enter a new Tasks' value={newTask} onChange={(e) => setNewTask(e.target.value)} />

                <button type='submit' > Add Task </button>

            </form>
        </div>
    )
}

