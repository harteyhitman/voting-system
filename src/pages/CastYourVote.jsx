import CastVoteImg from '../assets/pana.png'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const CastYourVote = () => {
    return (
        <div className="cast-your-vote">
           <Link  className="Skip" to="/Login/Admin/UserAccount">
                <p>Skip</p>
            </Link>
            <div className='voters'>
                <img src={CastVoteImg } alt="" />
                <h4>Cast Your Vote</h4>
                <p>Exercise your voting right, let your
                    voice be heard with the right vote
                </p>
            </div>
            <div className="switch">
                <div className='next-line'></div>
                <div className='next-line'></div>
                <div className='next-line'></div>
            </div>
        <Link to="/CastYourVote/VoteCount">
         <Button label="Next"/>
        </Link>   
        </div>
    )
}

export default CastYourVote