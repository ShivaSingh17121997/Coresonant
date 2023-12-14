import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all'); // 'all', 'completed', 'notCompleted'

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error fetching tasks:', error));
    }, []);

    const addTask = (newTask) => {
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
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, title: newTaskName } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return task.completed;
        if (filter === 'notCompleted') return !task.completed;
        return true;
    });

    return (

        <div>
            <AddTodo addTask={addTask} />
            <div>
                <button onClick={() => setFilter('all')}>All</button>

                <button onClick={() => setFilter('completed')}>Completed</button>

                <button onClick={() => setFilter('notCompleted')}>Not Completed</button>
            </div>
            {filteredTasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleCompletion={toggleCompletion}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ))}

        </div>
    );
};

export default TodoList;
