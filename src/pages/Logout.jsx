// Logout.jsx

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCredentials } from '../redux/authSlice';  // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('logout useEffect running');
    // Dispatch an action to clear authentication state (e.g., remove tokens)
    dispatch(clearCredentials());

    // Redirect to the login page or any other desired location
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <div>
      <p>Logging out...</p>
      {/* You can add a loading spinner or other UI elements if needed */}
    </div>
  );
};

export default Logout;
