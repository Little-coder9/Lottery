import React from 'react';
// import React, { useState } from 'react';
import './App.css';

//object destructring(allows direct use of properties from parameter)
const Money = ({ betAmount, onBetClick }) => {
  const betOptions = [1, 5, 10, 20];  //defining array for money


  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // const buttonStyle = {
  //   margin: '5px',
  //           backgroundColor: 'white',
  //           ...(isHovered && { backgroundColor: '#FEB139' })
  // };


  //markup for money component
  return (
    <div>
      <h2 className='title'> Cash</h2>
      {betOptions.map(amount => (
        <button
        className='btn-money'
          onClick={() => onBetClick(amount)}  //call onBetClick function if clicked
          style={{
            margin: '5px',
            backgroundColor: 'white'
          }}
        >
          ${amount}
        </button>
      ))}
      <p><b>Amount: </b><span className='money-text'>${betAmount}</span></p>
    </div>
  );
};

export default Money;
