import React from 'react';

//object destructring(allows direct use of properties from parameter)
const Buttons = ({ onCashButtonClick, onClearButtonClick, onRandomButtonClick, isDisabled }) => {

  //markup for buttons component
  return (
    <div className='cta-buttons'>

      {/* If conditions not met, cash button disabled by default */}
      <button className='cta-btn cash' onClick={onCashButtonClick} disabled={isDisabled}>
        Cash &#129297;
      </button>

      <button className='cta-btn clear' onClick={onClearButtonClick}>
        Clear
      </button>

      <button className='cta-btn random' onClick={onRandomButtonClick}>
        Random
      </button>
    </div>
  );
};

export default Buttons;
