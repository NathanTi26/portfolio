import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './style.css'

function Header() {
  return (
    <header className="header">
      <Link to="/">

      </Link>
      <nav className="nav-bar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/projets"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Projets
        </NavLink>
                <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Contact
        </NavLink>
                <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Mon CV
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
