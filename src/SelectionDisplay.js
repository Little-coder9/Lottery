import React from 'react';

//object destructring(allows direct use of properties from parameter)
function SelectionDisplay({ finalSelection }) {
  const { numbers, amount } = finalSelection;  //storing the arrays of finalSelection in respective variables

  //markup for display component
  return (
    <div>
      <h2 className='title'>Your Selections</h2>
      <div className='leftAlign'>
          {numbers.map((number) => (
            <div><b>Number:</b> {number}</div>
          ))}
        <p className='total'><b>Total:</b> ${amount}</p>
      </div>
    </div>
  );
}

export default SelectionDisplay;
