import React, { useState } from 'react';
import Numbers from './Numbers';
import Money from './Money';
import Buttons from './Buttons';
import SelectionDisplay from './SelectionDisplay';
import './App.css';

function App() {

  //creating new arrays for storing numbers, bet amount and the final selection 
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [betAmount, setBetAmount] = useState(0);
  const [finalSelection, setFinalSelection] = useState({ numbers: [], amount: 0 });

  
  //function for the number selection
  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number)); //filters out the matching number
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      alert("Only five numbers allowed");
    }
  };

  //function for money selection
  const handleBetClick = (amount) => {
    if (selectedNumbers.length === 5) {
      setBetAmount(prevAmount => prevAmount + amount);
    } else {
      alert("Please select the numbers first.");
    }
  };

  //passing selected data for display
  const handleCashButtonClick = () => {
    setFinalSelection({ numbers: selectedNumbers, amount: betAmount }); 
  };


  //clears all the array 
  const handleClearButtonClick = () => {
    setSelectedNumbers([]);
    setBetAmount(0);
    setFinalSelection({ numbers: [], amount: 0 });
  };


  //selects 5 random numbers automatically 
  const handleRandomButtonClick = () => {
    const numbers = Array.from({ length: 25 }, (_, i) => i + 1); //creating array having values from 1 to 25
    const shuffled = numbers.sort(() => 0.5 - Math.random());   //shuffles the order of the values
    setSelectedNumbers(shuffled.slice(0, 5));   //selects first 5 values 
  };

  return (
    <div className="App">
      <div className='flex-container'>
        <div className='flex-item section'>
          <Numbers selectedNumbers={selectedNumbers} onNumberClick={handleNumberClick} />
        </div>
        <div className='flex-item section'>
          <Money betAmount={betAmount} onBetClick={handleBetClick} />

          <Buttons
            onCashButtonClick={handleCashButtonClick}
            onClearButtonClick={handleClearButtonClick}
            onRandomButtonClick={handleRandomButtonClick}
            isDisabled={selectedNumbers.length !== 5 || betAmount === 0}/> {/* check if the numbers and money are selected properly */}
        </div>
        <div className='flex-item section'>
          <SelectionDisplay finalSelection={finalSelection} />
        </div>
      </div>
    </div>
  );
}

export default App;
