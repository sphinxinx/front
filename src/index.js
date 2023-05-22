import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StyledEngineProvider} from '@mui/material/styles';
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="sphinxinx.us.auth0.com" clientId="rwlOtuHZijhCB9CrKZbgB0QpKx071DdK" authorizationParams={{redirect_uri: window.location.origin}}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Auth0Provider>
  </React.StrictMode>
);





// Encender servidor (terminal)
// npm start

//Instalar dependencias
// npm install




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
