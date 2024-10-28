import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

    const [todos, setTodos] = useState([]);

useEffect(() => {
    fetch('http://localhost:3030/todos')
    .then(async function(res) {
        const data = await res.json();
        setTodos(data.todos);
    })
}, [])

  return (
    <div>
        <CreateTodo />
        <Todos todos = {todos} />
    </div>
  );
}

export default App;
