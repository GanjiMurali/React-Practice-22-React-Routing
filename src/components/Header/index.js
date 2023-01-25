// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="head-container">
    <div className="wave-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <h1 className="wave-text">Wave</h1>
    </div>
    <ul className="head-list-container">
      <li>
        <Link className="list-header" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="list-header" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="list-header" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
