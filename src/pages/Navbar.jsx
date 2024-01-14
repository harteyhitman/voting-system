import ElectNG from '../assets/Elect.NG.png'
import { NavbarList } from '../store/index'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="elect-img">
                <img src={ElectNG} alt="" />
            </div>
            <div className="navbar-list">
                <ul>
                    {NavbarList.map((list) => (
                        <li key={list.id}>
                            <a href={`#${list.id}`}>{list.lists}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="nav-btn">
                <Link to="/Login"><Button label="Login" className="login-btn" /></Link>
                <Link to="/Login/Admin/UserAccount"><Button label="Register" className="register-btn" /></Link>
            </div>
        </div>
    )
}

export default Navbar