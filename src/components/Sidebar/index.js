import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoDavid from '../../assets/images/Logo-Web-David-Fragua.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoDavid} alt="logo" width="300px" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassName="active"
        className="about-link"
        to="/"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassName="active"
        className="contact-link"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
