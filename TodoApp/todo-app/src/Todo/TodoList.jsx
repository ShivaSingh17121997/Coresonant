import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
       
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error fetching tasks:', error));
    }, []);

    const addTask = (newTask) => {
        // Add 
        setTasks([...tasks, newTask]);
    };

    const toggleCompletion = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const editTask = (taskId, newTaskName) => {
        // Edit the task 
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, title: newTaskName } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        // Delete a task 
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <div>
            <AddTodo addTask={addTask} />
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleCompletion={toggleCompletion}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ))}

            <div>
                
            </div>
        </div>
        
    );
};

export default TodoList;
