import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className='TodoCounter'>
      {total === completed ? (
        'Congratulations, you completed all tasks'
      ) : (
        <>
          You completed <span>{completed}</span> of <span>{total}</span> tasks
        </>
      )}
    </h1>
  );
}

export { TodoCounter };
