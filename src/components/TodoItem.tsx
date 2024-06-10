import React from 'react';
import { useDrag } from 'react-dnd';
import { Todo } from '../interface/interface';
import { ItemTypes } from '../constants/itemTypes';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  editTodo: (todo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, editTodo }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TODO,
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="todo-item" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <span>{todo.text}</span>
      <button onClick={() => editTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
