import React from 'react';
import { Timer } from './Timer';
import { Texto } from './Texto';
import { Lista } from './Lista';
import { Notas } from './Notas';

const defaultTodos = [
  { text: 'Nota 1...', completed: false },
  { text: 'Nota dos..', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, newText) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos[todoIndex].text = newText;
    setTodos(newTodos);
  };
  
  return (
    <>
      <Timer
        completed={completedTodos}
        total={totalTodos} 
      />
      <Texto
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onAddTodo={addTodo}
      />

      <Lista>
        {searchedTodos.map(todo => (
          <Notas
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            onEdit={editTodo}
          />
        ))}
      </Lista>
      
     
    </>
  );
}

export default App;