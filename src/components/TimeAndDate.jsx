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
    <div onSubmit={handleSubmit} id="date-cont">
      <div className="time-date">
        <label>Start Date</label>
        <input type="date"
          onChange={handleInputChange} required/>
      </div>
      <div className="time-date">
        <label>Time</label>
        <input type="time"
          value={inputValue}
          required
          onChange={handleInputChange}/>
      </div>
      <div className="time-date">
        <label>End Date</label>
        <input type="date"
        required
          onChange={handleInputChange}/>
      </div>
      <div className="time-date">
        <label>Time</label>
        <input type="time"
        required
          value={inputValue}
          onChange={handleInputChange}/>
      </div>
    </div>
  )
}

export default TimeAndDate