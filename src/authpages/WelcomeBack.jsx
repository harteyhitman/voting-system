import Button from "../components/Button"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const WelcomeBack = () => {

  const [phoneNo, setphoneNo] = useState('');
  const navigate = useNavigate();


  const limitPhoneNumber = event => {
    const limit = 11;
    setphoneNo(event.target.value.slice(0, limit));
    };

    const handleSubmitForm =(e)=>{
      e.preventDefault();
      navigate("/Login/PhoneNoVerification")


        }

  return (
    <form onSubmit={handleSubmitForm} className='login-cont'>
      <h1>Elect.NG</h1>
      <div className="login-page">

        <div className="login-texts">
          <h4>Welcome Back ! </h4>
          <p>Welcome to <span>Elect.NG</span> Online Voting Platform</p>
        </div>
        <div className="login">
          <div className="inputs">
            <input
            type="number"
            value={phoneNo}
            onChange={limitPhoneNumber}
             placeholder='Phone number' 
             pattern="\d{3}-\d{3}-\d{4}"
             required
             />
             
            <input
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            type="password" placeholder='password' 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
            />
          </div>

          <div className="remember-password">
            <input className="checkbox" type="checkbox" required/>
            <span>Remember Password</span>
            <span>Forgot Password?</span>
          </div>

        </div>
      </div>
      <Button  label="Login" />
<Link className="dont-have-account" to="/Login/Admin/UserAccount">
Don’t have an account? <span>Create Account</span>
</Link>
    </form>
  )
}

export default WelcomeBack