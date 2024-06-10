import React from 'react';
import { useNavigate } from 'react-router-dom';
import TodoList from './TodoList';
import '../css/home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className="home-container">
        <h1 className="home-header">Home</h1>
        <button className="logout-button" onClick={handleLogout}>Sair</button>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;
