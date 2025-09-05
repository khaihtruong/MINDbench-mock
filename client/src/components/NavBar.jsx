import "../styles/NavBar.css"
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className = 'NavBar_container'>
      <nav>
        <ul className = 'NavBar_list'>
          <li><NavLink to = "/">Application library</NavLink></li>
          <li><NavLink to = "/">Model library</NavLink></li>
          <li><NavLink to = "/">Request</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}