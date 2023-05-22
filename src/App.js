import React from 'react';
import './App.css';
import { LoginButton } from './components/Login/Login';
import { LogoutButton } from './components/Login/Logout';
import { Profile } from './components/Login/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className='cimiento'>
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
          
        </>
        ) : (
          <LoginButton />
        )}
    </div>
  );
}

export default App;
