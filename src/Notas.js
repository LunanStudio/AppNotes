import React, { useState } from 'react';
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import './Notas.css';

function Notas(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.onEdit(props.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(props.text);
    setIsEditing(false);
  };

  return (
    <li className="Notas">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </>
      ) : (
        <>
          <p className={`Notas-p ${props.completed && "Notas-p--complete"}`}>
            {props.text}
          </p>

          <button onClick={handleEdit}>Editar</button>
          <DeleteIcon
            onDelete={props.onDelete}
          />
        </>
      )}
    </li>
  );
}

export { Notas };