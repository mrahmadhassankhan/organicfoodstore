import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailImage from '../../images/email.png';
import personImage from '../../images/person.png';
import passwordImage from '../../images/password.png';
import CSS from './Login.module.css';
import ForgetPassword from '../ForgetPassword/ForgetPassword';

const Login = () => {
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [password, setPassword] = useState('');
  const [showforgetPopup, setShowLoginPopup] = useState(false);


  const toggleforgetPopup = () => {
    setShowLoginPopup(!showforgetPopup);
  };


  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const isNameValid = (name) => {
    const emailRegex = /^[a-zA-Z\s]+$/;
    return emailRegex.test(name);
  };
  const isPasswordValid = (password) => {
    const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
    return emailRegex.test(password);
  };

  const handleSignUp = (e) => {
    setAction("Sign Up")
    e.preventDefault();
    if (!isNameValid(name) && action !== "Login") {
      alert("Please enter correct name.");
      return false;
    }

    if (!isEmailValid(emailInput) && action !== "Login") {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!isPasswordValid(password) && action !== "Login") {
      alert("Please enter strong password which includes special characters.");
      return false;
    }

    setName("");
    setEmailInput("");
    setPassword("")

  };

  const handleLogin = (e) => {
    setAction("Login")
    e.preventDefault();
    if (!isEmailValid(emailInput) && action !== "Sign Up") {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!isPasswordValid(password) && action !== "Sign Up") {
      alert("Please enter your correct password.");
      return false;
    }

    setEmailInput("");
    setPassword("");

  };

  return (
    <div className={CSS['containera']}>
      <div className={CSS['header']}>
        <div className={CSS['text']}>{action}</div>
      </div>
      <div className={CSS['allinputs']}>
        {action === 'Login' ? null : (
          <div className={CSS['inputs']}>
            <img width={'20px'} height={'20px'} src={personImage} alt='' />
            <input required type='text' placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
          </div>
        )}
        <div className={CSS['inputs']}>
          <img width={'20px'} height={'15px'} src={emailImage} alt='' />
          <input required type='email' placeholder='Email' value={emailInput} onChange={(e)=>{setEmailInput(e.target.value)}} />
        </div>
        <div className={CSS['inputs']}>
          <img width={'20px'} height={'20px'} src={passwordImage} alt='' />
          <input required type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
      </div>
      {action === 'Sign Up' ? null : (
        <div className={CSS['forget-password']}>
          Forget Password?{' '}
          <Link className={CSS['forget-password-link']} >
            <span onClick={toggleforgetPopup}>Click here!</span>
          </Link>
        </div>
      )}

      <div className={CSS['submit-container']}>
        <button type='submit' className={action === 'Sign Up' ? `${CSS['submit']} ${CSS['gray']}` : `${CSS['submit']}`} onClick={handleLogin}>
          Login
        </button>
        <button type='submit' className={action === 'Login' ? `${CSS['submit']} ${CSS['gray']}` : `${CSS['submit']}`} onClick={handleSignUp} >
          Sign Up
        </button>
      </div>
      {showforgetPopup && (
            <div className={CSS.login_popup}>
              <ForgetPassword />
              <div className={CSS.close_popup} onClick={toggleforgetPopup}>
                <span className={CSS.close_popup_btn}>&times;</span>
              </div>
            </div>
          )}

    </div>
  );
};

export default Login;
