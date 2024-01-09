import React from 'react'
import DashBoard from '../components/DashBoard'
import { Polls } from '../store'

const CreateApoll = () => {
    return (
        <div className='create-poll'>
            <div className="left-dash">
                <h1>Elect.NG</h1>
                <div className="dashboard">
                    <DashBoard />
                </div>
            </div>
            <div className="right-dash">
                <div className="headings">
                    <h4>Create A Poll</h4>
                    <p>Fill in the fields belows to create a poll</p>
                </div>
                <div className="poll-inputs">
                    {Polls.map((poll) =>(
                        <form>
                            <label>{poll.label}</label>
                            <input type="text" placeholder={poll.placeholder}/>
                        </form>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CreateApoll