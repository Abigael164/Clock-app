import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Todolist from './Todolist.jsx';
import Clock from './Clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock />
  </StrictMode>,
);
