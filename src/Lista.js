import './Lista.css';

function Lista({ children }) {
  return (
    <ul className="Lista">
      {children}
    </ul>
  );
}

export { Lista };