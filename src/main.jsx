import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Container from './components/layout/container.jsx';
import SideBar  from './components/layout/sidebar.jsx';
import MainLayout from './components/layout/mainlayout.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <SideBar/>
      <MainLayout/>
    </Container>
  </React.StrictMode>,
)
