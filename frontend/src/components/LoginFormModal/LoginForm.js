import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';


function LoginForm() {
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
    <div class='loginSignUp'>
    <h4>Log In or Sign Up</h4>
    </div>
    <br></br>
      <form onSubmit={handleSubmit}>
      <h3>Welcome to whereBnB</h3>
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
        {errors.map(error => <li class='errors' key={error}>{error}</li>)}
      </ul>
      <div class='loginButton'>
      <button class='submitButton' type="submit">Continue</button>
      </div>
    </form>
      <div class='demoUser'>
      <button class='demoButton' onClick={demoLogin}>Demo User</button>
      </div>
      <div class="links">
        <br />
        <a href="https://github.com/sabrinawdesmond/whereBnB" target="_blank">
      <button class='externalLinkGitHub' type="submit">GitHub</button>
        </a>
        <a href="https://www.linkedin.com/in/sabrinawdesmond/" target="_blank">
        <button class='externalLinksLinkedin' type="submit">LinkedIn</button>
        </a>
        <a href="mailto:sabrinawdesmond@gmail.com" target="_blank">
        <button class='externalLinksEmail' type="submit">Email</button>
        </a>
      </div>
      <div class='signuplink'>
        <h5>New to whereBnB? Signup!</h5>
      </div>
    </>
  );
}

export default LoginForm;