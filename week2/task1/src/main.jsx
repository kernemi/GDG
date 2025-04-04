import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import UserCard from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserCard name="keri" email="keri21@gmail.com " age={21} color="lightblue" />
  </React.StrictMode>,
);
