import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider'; //For Whole App


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>{/* Context for the Whole App about Authentication */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
