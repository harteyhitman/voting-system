import React from 'react'
import Button from '../components/Button'
import { useNavigate } from "react-router-dom";


const PhoneNoVerification = () => {
  const navigate = useNavigate();

  const verify = (e)=>{
    navigate("VerificationSuccess");
    e.preventDefault();

  }

    return (
        <form onSubmit={verify} className='phone-verification'>
            <h1>Elect.NG</h1>
            <div className="fone-num-ver">
                <h4>Phone Number Verification</h4>
                <p>We've sent a 6- digit OTP code to 09139*****1 <br />
                    Please input the code here to verify your phone <br />
                    number.</p>
                    <div className="otp-inputs">
                <input type="text" placeholder='6-4-2-3-8-1' required/>
                <h4>OTP expires in 3:54</h4>
            </div>
            </div>
            <div>
                <Button label="Verify Phone Number"/>
            </div>
            
        </form>
    )
}

export default PhoneNoVerification