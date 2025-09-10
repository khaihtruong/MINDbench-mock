import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import './styles/main.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<NavBar />}>
          {/* child routes */}
          <Route path="models" element={<App />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
