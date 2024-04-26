import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import axios from 'axios';

// axios.defaults.baseURL = "https://cometake.pythonanywhere.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="456249570232-g52u7sg2d6brdugelfju6k2jitjmrdbd.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
  // </React.StrictMode>,
)
