import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (signState === 'Sign Up') {
      // Handle sign-up logic
      console.log('Sign Up:', { name, email, password });
    } else {
      // Handle sign-in logic
      console.log('Sign In:', { email, password });
    }
  };

  return (
    <div className="login">
      <img src={logo} className="login_logo" alt="Netflix Logo" />
      <div className="login_form">
        <h1>{signState}</h1>
        <form onSubmit={handleFormSubmit}>
          {signState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            {signState}
          </button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="/">Need Help?</a>
          </div>
        </form>

        <div className="form_switch">
          {signState === 'Sign In' ? (
            <p>
              New to Netflix?{' '}
              <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setSignState('Sign In')}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
