import React, { useState } from 'react';

const TimeAndDate = () => {
  const [inputValue, setInputValue] = useState('00:00');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with value:', inputValue);
  };


  return (
    <form onSubmit={handleSubmit} id="date-cont">
      <div className="time-date">
        <label>Start Date</label>
        <input type="date"
          onChange={handleInputChange}/>
      </div>
      <div className="time-date">
        <label>Time</label>
        <input type="time"
          value={inputValue}
          onChange={handleInputChange}/>
      </div>
      <div className="time-date">
        <label>End Date</label>
        <input type="date"
          onChange={handleInputChange}/>
      </div>
      <div className="time-date">
        <label>Time</label>
        <input type="time"
          value={inputValue}
          onChange={handleInputChange}/>
      </div>
    </form>
  )
}

export default TimeAndDate