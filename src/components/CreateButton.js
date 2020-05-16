import React from 'react';

export default function CreateButton(props) {
  return (
    <button
      type='button'
      className='btn btn-dark'
      style={{marginBottom: '1rem', width: '80%'}}
      onClick={props.onClick}>
      Create New Record
    </button>
  );
}
