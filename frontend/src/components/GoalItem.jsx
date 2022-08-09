import React from 'react';

const GoalItem = ({ goal }) => {
  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-us')}</div>
      <h2>{goal.text}</h2>
      <button
        className='close'
        onClick={() => {
          console.log('clicked');
        }}
      >
        X
      </button>
    </div>
  );
};

export default GoalItem;
