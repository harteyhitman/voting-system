import DashBoard from "../components/DashBoard"
import Bell from '../assets/noti-bells.png'
import Button from "../components/Button"
import Refreshed from '../assets/ArrowClockwise.png'
import Lock from '../assets/Lock.png'
import { Link } from "react-router-dom"

const WelcomeDashboard = () => {
    return (
        <main id="dashboard" className="dash-con">
            <div className="navbar-dashboard">
                <h2>Elect.NG</h2>
                <input type="search" placeholder="search" />
                <div className="notification">
                    <img src={Bell} alt="" />
                    <div><h4>J</h4></div>
                </div>
            </div>
            <div className="dash-container">
                <div className="dashboard">
                    <DashBoard />
                </div>
                <div className="create-and-join-poll">
                    <div className="small-screen-welcome">
                        Welcome!
                    </div>
                    <p>Welcome to <span>ELECT.NG</span>  Online Voting System <br />
                        Your account has been created successfully <br />
                        Let’s Get Started</p>
                    <div className="btn-dash-board">
                        <Link to="/Login/PhoneNoVerification/VerificationSuccess/WelcomeDashboard/CreateApoll"><Button label="Create A Poll" className="create-a-poll" /></Link>
                        <Button label="Join A Vote" className="join-a-vote" />
                    </div>
                    <div className="voting-web">
                        <div>AA</div>
                        <div><img src={Lock} alt="" />voting .web</div>
                        <div><img src={Refreshed} alt="" /></div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WelcomeDashboard