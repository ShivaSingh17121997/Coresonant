
import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default function Todo() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/1/todos`)
            .then((res) => res.json())
            .then((Adata) => {
                setData(Adata)
                console.log(Adata)
            })
            .then((err) => console.log(err))
    }, [])



    //addtodo
    const addTask = (newTask) => {
        setData([...data, newTask])
    }

    // toggle completion
    const toggleCompletion = (taskId) => {
        setData((prevTasks) =>
            prevTasks.map((task) => 
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        )
    }

    // delete task 

    const deleteTask = (taskId) => {
        setData((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
    }

    // edit task

    const editTask = (taskId, newTaskName) => {
        setData((prevTasks) => {
            prevTasks.map((task) => 
                task.id === taskId ? { ...task, title: newTaskName } : task
            )
        })
    }


    // filter
    const filteredTask = data.filter((task) => {
        if (filter === "all") return true;
        if (filter === "completed ") return task.completed;
        if (filter === "notCompleted") return !task.completed;
        return true;
    })

    return (
        <div>
            <div>
                <AddTodo addTask={addTask} />
            </div>

            <div>
                <button onClick={() => setFilter("all")} >All</button>
                <button onClick={() => setFilter("completed")} >Completed</button>
                <button onClick={() => setFilter("notCompleted")} >Not Completed</button>
            </div>

            <div>
                {filteredTask.map((task) => (
                    <TodoList
                        key={task.id}
                        task={data}
                        toggleCompletion={toggleCompletion}
                        editTask={editTask}
                        deleteTask={deleteTask} />
                ))}
            </div>

        </div>
    )
}

