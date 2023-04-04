import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';


function SignupForm() {
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
    <div class='SignUp'>
    <h4>Sign Up</h4>
    </div>
    <br />
      <form onSubmit={handleSubmit}>
      <h3>Welcome to whereBnB</h3>
        <label>
          <br />
        <ul>
        {errors.map(error => <li class='errors' key={error}>{error}</li>)}
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
        <div class='signupButtonBox'>
          <br />
        <button class='signupButton' type="submit">Sign Up</button>
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
    </>
  );
}

export default SignupForm;