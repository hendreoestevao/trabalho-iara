
import Login from './components/Login';
import TodoList from './components/TodoList';
import './css/home.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        <TodoList />
      </header>
    </div>
  );
};
export default App;