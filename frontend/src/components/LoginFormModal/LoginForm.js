import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';


function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


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
      <div class="links">
        <br />
      <button class='externalLinkGitHub' type="submit">GitHub</button>
    
      <button class='externalLinksLinkedin' type="submit">LinkedIn</button><br />
    
      <button class='externalLinksEmail' type="submit">Email</button>
      </div>
      <div class='signuplink'>
        <h5>New to whereBnB? Signup!</h5>
      </div>
    </>
  );
}

export default LoginForm;