import React, { useState, useEffect } from 'react';
import { Todo } from '../interface/interface';

interface TodoFormProps {
  addTodo: (text: string) => void;
  editTodo: (id: number, newText: string, newCategory: string) => void; // Corrija a assinatura da função
  isEditing: boolean;
  currentTodo: Todo | null;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo, editTodo, isEditing, currentTodo }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (isEditing && currentTodo) {
      setText(currentTodo.text);
    } else {
      setText('');
    }
  }, [isEditing, currentTodo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && currentTodo) {
      // Corrija a chamada da função editTodo para incluir o novo texto e a nova categoria
      editTodo(currentTodo.id, text, currentTodo.category);
    } else {
      addTodo(text);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;
