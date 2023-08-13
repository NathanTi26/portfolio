import { NavLink } from 'react-router-dom'

import { HashLink as Link } from 'react-router-hash-link';
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
          to="#projects"
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
