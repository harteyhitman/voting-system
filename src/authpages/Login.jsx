import Button from "../components/Button"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Login = () => {

  const [phoneNo, setphoneNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const limitPhoneNumber = event => {
    const limit = 11;
    setphoneNo(event.target.value.slice(0, limit,));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    navigate("PhoneNoVerification");

  }

  return (
    <form onSubmit={handleSubmitForm} className='login-cont'>
      <h1>Elect.NG</h1>
      <div className="login-page">

        <div className="login-texts">
          <h4>Welcome Back ! </h4>
          <p>Welcome to <span>Elect.NG</span>  Online Voting Platform, please <br />
            log in to vote for your preferred candidates</p>
        </div>
        <div className="login">
          <div className="inputs">
            <input
              type='number'
              id='phone'
              name='phone'

              value={phoneNo}
              onChange={limitPhoneNumber}
              placeholder='Phone number'
              required
            />

            <div style={{ position: 'relative' }}>
              <input
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                style={{  }}
                onClick={togglePasswordVisibility}
                className="eye-icon"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </i>
            </div>
          </div>

          <div className="remember-password">
            <input className="checkbox" type="checkbox" required />
            <span>Remember Password</span>
            <span>Forgot Password?</span>
          </div>

        </div>
      </div>
      <Button label="Login" />
      <Link to="/Login/Admin"><p className="admin-sign-in">Sign in as an Admin</p></Link>
      <Link className="dont-have-account" to="/Login/Admin/UserAccount">
        Don’t have an account? <span>Create Account</span>

      </Link>
    </form>
  )
}

export default Login