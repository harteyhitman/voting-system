import Ballotbox from '../assets/BALLOT.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const BallotBox = () => {
  return (
    <div className='ballot-cont'>
      <div className="welcome">
        <p>Welcome to</p>
        <h2>Elect.NG</h2>
        <p>An online voting app</p>
      </div>
      <div className="ballot-box">
        <img src={Ballotbox} alt="" />
      </div>
      <div className="ballot-btn">
        <Link to="/CastYourVote"><Button label="Register as a voter" className="login-btn-ballot" /></Link>
        <Link to="/CastYourVote"><Button label="Register as an admin" className="register-btn-ballot" /></Link>
      </div>
    </div>
  );
}

export default BallotBox;
