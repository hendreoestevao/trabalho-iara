import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import CategoryColumn from './CategoryColumn';
import { Todo } from '../interface/interface';
import '../css/home.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false, category: 'normal' };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (todo: Todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const updateTodo = (id: number, newText: string, newCategory: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText, category: newCategory } : todo)));
    setIsEditing(false);
    setCurrentTodo(null);
  };

  const moveTodo = (id: number, newCategory: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, category: newCategory } : todo)));
  };

  const categories = ['To do', 'Doing', 'Code review', 'Testing', 'To merge'];

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1 className='to-do'>To-Do List</h1>
        <TodoForm
          addTodo={addTodo}
          editTodo={updateTodo}
          isEditing={isEditing}
          currentTodo={currentTodo}
        />
        <div className="todo-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </div>
        <div className="category-list">
          {categories.map(category => (
            <CategoryColumn
              key={category}
              category={category}
              todos={todos.filter(todo => todo.category === category)}
              moveTodo={moveTodo}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default TodoList;