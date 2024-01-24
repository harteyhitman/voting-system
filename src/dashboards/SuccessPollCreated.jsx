import React from 'react'
import DashBoard from '../components/DashBoard'
import { Link } from 'react-router-dom'
import SuccessImg from '../assets/success-img.png'
import Button from '../components/Button'


const SuccessPollCreated = () => {
    return (
        <div className='success-poll-created'>
            <div className="sucess-dashboard">
                <h1>Elect.NG</h1>
                <DashBoard />
            </div>
            <div className='ver-success' >
                <img src={SuccessImg} alt="" />
                <h2>Poll Created Successfully</h2>
              
                <Link to="/Login/PhoneNoVerification/VerificationSuccess/WelcomeDashboard">
                    <Button label="Done" />

                </Link>
            </div>
        </div>
    )
}

export default SuccessPollCreated