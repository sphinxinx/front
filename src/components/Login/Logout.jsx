import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './LoginButton.css';
import Button from '@mui/material/Button';


export const LogoutButton = () => {
    const { logout } = useAuth0();

    return <Button variant="contained" color="error" onClick={() => logout({returnTo:window.location.origin})}>Logout</Button>
}
