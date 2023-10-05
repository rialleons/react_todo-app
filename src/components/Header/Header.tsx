import React, { useContext, useState } from 'react';

import './Header.scss';
import { DispatchContext } from '../TodosContext';

export const Header: React.FC = () => {
  const dispatch = useContext(DispatchContext);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setNewTodoTitle('');
    }

    if (event.key === 'Enter') {
      if (newTodoTitle.trim().length) {
        dispatch({
          type: 'add',
          payload: {
            id: +new Date(),
            title: newTodoTitle,
            completed: false,
          },
        });
      }

      setNewTodoTitle('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(event.target.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>

      <input
        type="text"
        data-cy="createTodo"
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTodoTitle}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />

    </header>
  );
};