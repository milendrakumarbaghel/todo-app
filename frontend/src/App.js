import logo from './logo.svg';
import './App.css';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div>
        <CreateTodo />
        <Todos />
    </div>
  );
}

export default App;
