import './Timer.css';

function Timer({ total, completed }) {
  return (
    <h1 className="Timer">
      Notas completadas <span>{completed}</span> de <span>{total}</span>
    </h1>
  );
}

export { Timer };