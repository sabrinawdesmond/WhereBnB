import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import closeButton from "./close-24.png"


function LoginForm({ onClose }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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

  return (
    <>
      <img src={closeButton} alt="Close-Button" className="close-button" onClick={onClose}/>
    <div className='loginSignUp'>
    <h4>Log In or Sign Up</h4>
    </div>
    <br></br>
      <form onSubmit={handleSubmit}>
      <h3>Welcome to Wherebnb</h3>
      <label>
        <br></br>
        <input
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
        <input
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
      <button className='externalLinkGitHub' type="submit">GitHub</button>
        </a>
        <a href="https://www.linkedin.com/in/sabrinawdesmond/" target="_blank" rel="noopener noreferrer">
        <button className='externalLinksLinkedin' type="submit">LinkedIn</button>
        </a>
        <a href="mailto:sabrinawdesmond@gmail.com" target="_blank" rel="noopener noreferrer">
        <button className='externalLinksEmail' type="submit">Email</button>
        </a>
      </div>
      <div className='signuplink'>
        <h5>New to Wherebnb? Signup!</h5>
      </div>
    </>
  );
}

export default LoginForm;