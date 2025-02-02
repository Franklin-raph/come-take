import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import axios from 'axios';

// axios.defaults.baseURL = "https://cometake.pythonanywhere.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="456249570232-4fgklfg7nf1pdn7ghtqenpnh1dgg7qdi.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
  // </React.StrictMode>,
)
