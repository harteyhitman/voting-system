import React from 'react'
import ToggleMin from '../components/ToggleMin'
import { useState } from "react";
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const UserAccount = () => {
    const navigate = useNavigate();
    const [phoneNo, setphoneNo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const limitPhoneNumber = event => {
        const limit = 11;
        setphoneNo(event.target.value.slice(0, limit));
    };


    const handlesubmitUser = (e) => {
        e.preventDefault();
        navigate('/Login/Admin/UserAccount/WelcomeBack')

    }

    return (

        <div className='admin-con'>
            <h1>Elect.NG</h1>

            <form onSubmit={handlesubmitUser}>
                <div className="data-container">
                    <ToggleMin />
                    <h2>Create Account </h2>
                    <div className="forms">
                        <input type="text" placeholder='Full Name' required />
                        <input
                            type="number"
                            value={phoneNo}
                            onChange={limitPhoneNumber}
                            placeholder='Phone number'
                            required />
                        <input type="text" placeholder='Voter’s  Identification Number (optional)' />



                        <div style={{ position: 'relative' }}>
                            <input
                                required
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i
                                style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </i>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input
                                required
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <i
                                style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </i>
                        </div>
                    </div>
                </div>
                <Button label="Create Account" />
            </form>
            <p>Already have an account? <Link to="/Login"><span>Log In</span> </Link> </p>
        </div>
    )
}

export default UserAccount