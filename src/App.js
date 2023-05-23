import React, {useState} from 'react';
import './App.css';
import { LoginButton } from './components/Login/Login';
import { LogoutButton } from './components/Login/Logout';
import { Profile } from './components/Login/Profile';
import {Layout} from './components/Layout/Layout';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function App() {
  const [user,setUser] = useState(false);
  const {isAuthenticated} = useAuth0();
  return (
    <div className='cimiento'>
      {user ? (
        <Layout/>
      ):isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
          <br/>
          <Button variant="contained" onClick={()=>setUser(true) } color="success">
            Continuar
          </Button>
        </>
        ) : (
          <>
            <FitnessCenterIcon className="iconInicial"/>
            <br/>
            <LoginButton />
          </>
        )}
    </div>
  );
}

export default App;
