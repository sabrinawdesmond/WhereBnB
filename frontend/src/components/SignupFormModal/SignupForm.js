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
      <div class="links">
        <br />
      <button class='externalLinkGitHub' type="submit">GitHub</button>
    
      <button class='externalLinksLinkedin' type="submit">LinkedIn</button><br />
    
      <button class='externalLinksEmail' type="submit">Email</button>
      </div>
    </>
  );
}

export default SignupForm;