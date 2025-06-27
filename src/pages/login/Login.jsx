import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Login attempt with:', { email, password });
    // For demo purposes, navigate to home after login
    navigate('/user/dashboard');
  };

  return (
    <div className="login">
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to continue to your account</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="forgot-password">
              <a href="#forgot">Forgot password?</a>
            </div>
            
            <button type="submit" className="login-button">
              Sign In
            </button>
            
            <p className="signup-link">
              Don't have an account? <a href="#signup">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;