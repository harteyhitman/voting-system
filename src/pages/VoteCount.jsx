import VoteCountImg from '../assets/Count.png'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const VoteCount = () => {
    return (
        <div className="cast-your-vote">
            <Link  className="Skip" to="/Login/Admin/UserAccount">
                <p>Skip</p>
            </Link>
            <div className='voters'>
                <img src={VoteCountImg} alt="" />
                <h4>Make Your Vote Count</h4>
                <p>Register and vote from anywhere around the world
                </p>
            </div>
            <div className="switch">
                <div className='next-line'></div>
                <div className='next-line'></div>
                <div className='next-line'></div>
            </div>
            <Link to="/CastYourVote/VoteCount/StayInfromed">
         <Button label="Next" className="hover-all"/>
        </Link>   
        </div>)
}

export default VoteCount