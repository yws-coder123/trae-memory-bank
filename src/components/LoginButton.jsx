import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginButton.css';

/**
 * Login button component for authentication
 * @param {Object} props - Component props
 * @param {Function} props.onLogin - Callback when login is initiated
 * @param {boolean} props.isLoading - Whether login is in progress
 * @param {string} props.className - Additional CSS classes
 */
const LoginButton = ({ onLogin, isLoading, className }) => {
  // Track if button was already pressed to prevent duplicate submissions
  const [isPressed, setIsPressed] = useState(false);

  // Enhanced implementation for both desktop and mobile
  const handleLoginEvent = (e) => {
    // Prevent default to avoid double firing on some mobile browsers
    e.preventDefault();
    
    // Prevent action if loading or already pressed
    if (isLoading || isPressed) return;
    
    setIsPressed(true);
    onLogin();
    
    // Reset press state after a delay for UX
    setTimeout(() => setIsPressed(false), 1000);
  };

  return (
    <button
      className={`login-button ${isLoading ? 'loading' : ''} ${className || ''}`}
      onClick={handleLoginEvent}
      onTouchEnd={handleLoginEvent} // Add touch event support for mobile
      disabled={isLoading}
      aria-busy={isLoading}
    >
      {isLoading ? 'Logging in...' : 'Log In'}
    </button>
  );
};

LoginButton.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  className: PropTypes.string
};

LoginButton.defaultProps = {
  isLoading: false,
  className: ''
};

export default LoginButton;