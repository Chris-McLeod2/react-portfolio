import React from 'react';
import App from './App';
import './styles.css'
import ReactDomClient from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = ReactDomClient.createRoot(container)
root.render(<App />);
