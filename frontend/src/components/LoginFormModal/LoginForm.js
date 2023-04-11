import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import closeButton from "./close-24.png"
import SignupForm from '../SignupFormModal/SignupForm';
import { Modal } from '../../context/Modal';
import './LoginForm.css'
import gmailLogo from "./gmailLogo.svg"
import linkedinLogo from './linkedinLogo.svg'
import githubLogo from './githubLogo.svg'

function LoginForm({ onClose }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showSignupFormModal, setShowSignupFormModal] = useState(false);
  const [showLoginFormModal, setShowLoginFormModal] = useState(false);



  const demoLogin = (e) => {
    e.preventDefault()
    return dispatch(sessionActions.login({credential: 'demo@user.io', password: 'password'}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text(); 
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  const openSignupFormModal = () => {
    setShowSignupFormModal(true);
    setShowLoginFormModal(false)
  };

  const handleSignupClick = () => {
    openSignupFormModal();
    setShowLoginFormModal(false);
  };

  const handleCloseSignupForm = () => {
    setShowSignupFormModal(false);
  };

  const handleCloseLoginForm = () => {
    setShowLoginFormModal(false);
  };

  function handleSignupAndCloseLoginForm() {
    handleSignupClick();
    handleCloseLoginForm();
  }

  return (
    <>
    <div className='loginForm'>
      <img src={closeButton} alt="Close-Button" className="close-button" onClick={onClose}/>
    <div className='loginSignUp'>
    <h4>Log In or Sign Up</h4>
    </div>
    <br></br>
      <form onSubmit={handleSubmit}>
      <h3>Welcome to Wherebnb</h3>
      <label>
        <br></br>
        <input className='email'
          type="text"
          placeholder='Email'
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        <br>
        </br>
        <input className='password'
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <ul>
      <br></br>
        {errors.map(error => <li className='errors' key={error}>{error}</li>)}
      </ul>
      <div className='loginButton'>
      <button className='submitButton' type="submit">Continue</button>
      </div>
    </form>
      <div className='demoUser'>
      <button className='demoButton' onClick={demoLogin}>Demo User</button>
      </div>
      <div className="links">
        <br />
        <a href="https://github.com/sabrinawdesmond/whereBnB" target="_blank" rel="noopener noreferrer">
      <button className='externalLinkGitHub' type="submit"><img src={githubLogo} alt='gmail' className='github-icon'/>GitHub<div></div></button>
        </a>
        <a href="https://www.linkedin.com/in/sabrinawdesmond/" target="_blank" rel="noopener noreferrer">
        <button className='externalLinksLinkedin' type="submit"><img src={linkedinLogo} alt='gmail' className='linkedin-icon'/>Linkedin<div></div></button>
        </a>
        <a href="mailto:sabrinawdesmond@gmail.com" target="_blank" rel="noopener noreferrer">
        <button className='externalLinksEmail' type="submit"><img src={gmailLogo} alt='gmail' className='gmail-icon'/>Email<div></div></button>
        </a>
      </div>
      <div className='signuplink'>
        <p onClick={handleSignupAndCloseLoginForm}>New to Wherebnb? Signup!</p>
      </div>
      {showLoginFormModal && (
        <Modal onClose={handleCloseLoginForm}>
          <LoginForm onClose={handleCloseLoginForm} />
        </Modal>
      )}
      {showSignupFormModal && (
        <Modal onClose={handleCloseSignupForm}>
          <SignupForm onClose={handleCloseSignupForm} />
        </Modal>
      )}
      </div>
    </>
  );
}

export default LoginForm;