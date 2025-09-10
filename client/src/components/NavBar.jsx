import "../styles/NavBar.css"
import { Outlet, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className = 'NavBar_container'>
      <nav>
        <ul className = 'NavBar_list'>
          <li><NavLink to = "/leaderboard">Performance Leaderboard</NavLink></li>
          <li><NavLink to = "/models">Model library</NavLink></li>
          <li><NavLink to = "/">Request</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}