import React from 'react';
import { useDrop } from 'react-dnd';
import { Todo } from '../interface/interface';
import { ItemTypes } from '../constants/itemTypes';

interface CategoryColumnProps {
  category: string;
  todos: Todo[];
  moveTodo: (id: number, newCategory: string) => void;
}

const CategoryColumn: React.FC<CategoryColumnProps> = ({ category, todos, moveTodo }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TODO,
    drop: (item: { id: number }) => moveTodo(item.id, category),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="category-column" style={{ backgroundColor: isOver ? 'lightyellow' : 'white' }}>
      <h2>{category}</h2>
      <div className="category">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryColumn;
