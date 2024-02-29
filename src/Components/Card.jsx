import React from 'react';
import '../styles/index.css'

export const Card = ({ nombre, color }) => {
  return (
    <div >
      <h1 className='name-card'>Nombre: {nombre}</h1>
      <h1 className='color-card'>Color: {color}</h1>
    </div>
  );
};
