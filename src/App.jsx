import './Global.scss'
import './Mobile.scss'
import Onboarding from './pages/Onboarding'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CastYourVote from './pages/CastYourVote';
import VoteCount from './pages/VoteCount';
import StayInfromed from './pages/StayInfromed';
import Login from './authpages/Login';
import PhoneNoVerification from './authpages/PhoneNoVerification';
import VerificationSuccess from './authpages/VerificationSuccess';
import Admin from './authpages/AdminAccount';
import UserAccount from './authpages/UserAccount';
import WelcomeBack from './authpages/WelcomeBack';
import WelcomeDashboard from './dashboards/WelcomeDashboard';
import CreateApoll from './dashboards/CreateApoll';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={ <Onboarding />}/>
      <Route exact path='/CastYourVote' element={<CastYourVote />} />
      <Route exact path='/CastYourVote/VoteCount' element={<VoteCount />} />
      <Route exact path='/CastYourVote/VoteCount/StayInfromed' element={<StayInfromed />} />
      <Route exact path='Login' element={<Login />} />
      <Route exact path='/Login/PhoneNoVerification' element={<PhoneNoVerification />} />
      <Route exact path='/Login/PhoneNoVerification/VerificationSuccess' element={<VerificationSuccess />} />
      <Route exact path='/Login/Admin' element={<Admin />} />
      <Route exact path='/Login/Admin/UserAccount' element={<UserAccount />} />
      <Route exact path='/Login/Admin/UserAccount/WelcomeBack' element={<WelcomeBack />} />
      <Route exact path='/Login/PhoneNoVerification/VerificationSuccess/WelcomeDashboard' element={<WelcomeDashboard />} />
      <Route exact path='/Login/PhoneNoVerification/VerificationSuccess/WelcomeDashboard/CreateApoll' element={<CreateApoll />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App