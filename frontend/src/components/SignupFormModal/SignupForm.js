import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import closeButton from "./close-24.png"


function SignupForm({ onClose }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const demoLogin = (e) => {
    e.preventDefault()
    return dispatch(sessionActions.login({credential: 'demo@user.io', password: 'password'}))
  }

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
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
    return setErrors(['Passwords must match']);
  };

  return (
    <>
    <img src={closeButton} alt="Close-Button" className="close-button" onClick={onClose}/>
    <div className='SignUp'>
    <h4>Sign Up</h4>
    </div>
    <br />
      <form onSubmit={handleSubmit}>
      <h3>Welcome to Wherebnb</h3>
        <label>
          <br />
        <ul>
        {errors.map(error => <li className='errors' key={error}>{error}</li>)}
      </ul>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <div className='signupButtonBox'>
          <br />
        <button className='signupButton' type="submit">Sign Up</button>
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
    </>
  );
}

export default SignupForm;