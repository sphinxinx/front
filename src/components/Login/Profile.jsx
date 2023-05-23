import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LoginButton.css';
import  Typography   from '@mui/material/Typography';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()

    if(isLoading) {
        return <div>Loading...</div>

    }

    return (
        isAuthenticated && (
            <div className="contenedor-imagen">
                <FitnessCenterIcon className="iconLogin"/>
                <br/>
                <Typography variant="h4" gutterBottom>
                    {user.name}
                </Typography>
                <p>Email: {user.email}</p>
            </div>
        )
    )
}