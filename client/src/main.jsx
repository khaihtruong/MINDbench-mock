import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import './styles/main.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/*" element = {< NavBar/>}>
          <Route path="" element = {< App/>} />
        </Route>
      </Routes>
      <App />
    </StrictMode>
  </BrowserRouter>,
)
