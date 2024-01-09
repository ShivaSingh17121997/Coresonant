import './App.css';
import TodoList from './Todo/TodoList';
// import Todo from './Todo/Todo';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "rgb(54, 69, 79)" }} >Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
