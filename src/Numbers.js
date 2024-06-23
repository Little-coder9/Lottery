import React from 'react';
import "./App.css";

//object destructring(allows direct use of properties from parameter)
const Numbers = ({ selectedNumbers, onNumberClick }) => {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1); //creating a new array  


  //markup for numbers component
  return (
    <div>
      <h2 className='title'>Lottery Numbers</h2>
      <div className='btn-numbers'>
        {numbers.map(number => (
          <button
            className='btn-number'
            onClick={() => onNumberClick(number)} //call the onNumberClick function when clicked
            style={{
              margin: '5px',
              backgroundColor: selectedNumbers.includes(number) ? '#FEB139' : 'white'  //if already selected number is clicked, change color
            }}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
