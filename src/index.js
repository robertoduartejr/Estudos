import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main/index.tsx'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />

  </React.StrictMode>
);

