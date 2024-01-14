import React from 'react'
import DashBoard from '../components/DashBoard'
import TimeAndDate from '../components/TimeAndDate'
import { Polls, } from '../store'
import Button from '../components/Button'

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
                <form className="poll-inputs">
                    {Polls.map((poll) =>(
                        <div key={poll.id}>
                            <label>{poll.label}</label>
                            <input type="text" placeholder={poll.placeholder}/>              
                        </div>
                            
                    ))}
                    <div className='grid-display'>
                        <TimeAndDate />
                    </div>
                    
                    <label>Voting Restrictions</label>
                    <select name="onevote" id="onevote">
                        <option value="voteip">One vote per IP address</option>
                    </select>
                    <Button label="Create A Poll" className=""/>
                </form>
            </div>
        </div>
    )
}

export default CreateApoll