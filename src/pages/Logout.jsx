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
    // Dispatch an action to clear authentication state
    dispatch(clearCredentials());

    // Redirect to home page
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
