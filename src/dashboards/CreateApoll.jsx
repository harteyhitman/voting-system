import React from 'react'
import DashBoard from '../components/DashBoard'
import TimeAndDate from '../components/TimeAndDate'
import { Polls, } from '../store'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const CreateApoll = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    const checkFormValidity = () => {
        const inputs = document.querySelectorAll(true);
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });
        setIsFormValid(isValid);
    }
    const createPollNow = (e) => {
        navigate('/Login/PhoneNoVerification/VerificationSuccess/WelcomeDashboard/CreateApoll/SuccessPollCreated');
        e.preventDefault();

    }

    return (
        <form onSubmit={createPollNow} className='create-poll'>

            <div className="dashboard dashboard-create-poll-new">
                <h1>Elect.NG</h1>
                <DashBoard />
            </div>

            <div className="right-dash">
                <div className="headings">
                    <h4>Create A Poll</h4>
                    <p>Fill in the fields belows to create a poll</p>
                </div>
                {Polls.map((poll) => (
                    <div key={poll.id}>
                        <label>{poll.label}</label>
                        <input className='polls-inputs'
                            type="text"
                            placeholder={poll.placeholder}
                            required
                            onBlur={checkFormValidity}
                        />
                    </div>
                ))}
                <div className='grid-display'>
                    <TimeAndDate />
                </div>

                <label>Voting Restrictions</label> <br />
                <select name="onevote" id="onevote">
                    <option value="voteip">One vote per IP address</option>
                </select>
                <Button label="Create A Poll"
                    disabled={!isFormValid}
                    className={`btn-create-poll 
                         ${isFormValid ? '' : 'disabled'}`}
                />
            </div>
        </form>
    )
}

export default CreateApoll