import React from 'react'

const Button = ({ className, label }) => {
  return (
    <div className='btn-con'>
      <button className={className} >
        {label}
      </button>
    </div>
  );
};

export default Button