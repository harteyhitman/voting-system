import StayInformImg from '../assets/amico.png'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const StayInfromed = () => {
  return (
    <div className="cast-your-vote">
       <Link  className="Skip" to="/Login/Admin/UserAccount">
                <p>Skip</p>
            </Link>
      <div className='voters'>
        <img src={StayInformImg} alt="" />
        <h4>Stay Informed</h4>
        <p>Stay informed and get the latest news  around you about your elections.</p>
      </div>
      <div className="switch">
        <div className='next-line'></div>
        <div className='next-line'></div>
        <div className='next-line'></div>
      </div>
      <div className="ballot-btn">
        <Link to="/Login"><Button label="Register as a voter" className="login-btn-ballot" /></Link>
        <Link to="/Login"><Button label="Register as an admin" className="register-btn-ballot" /></Link>
      </div>
    </div>)
}

export default StayInfromed