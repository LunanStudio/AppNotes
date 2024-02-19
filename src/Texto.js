import React from 'react';
import './Texto.css';

function Texto({
  searchValue,
  setSearchValue,
  onAddTodo,
}) {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter'&& event.target.value.trim() !== '') {
      const text = event.target.value.trim();
      if (text) {
        onAddTodo(event.target.value.trim());
      setSearchValue('');
      }
    }
  };

  return (
    <input
      placeholder="Agregar nueva nota..."
      className="Texto"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      onKeyDown={handleKeyDown}
    />
  );
}

export { Texto };