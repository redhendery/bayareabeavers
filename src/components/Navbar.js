import { Link } from 'react-router-dom'
import BridgeLogo from '../images/BridgeLogo.png'

const Navbar = ()=> {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <div className="container-fluid collapse navbar-collapse">
          <img src={BridgeLogo} 
            alt="Bay Area Beavers Logo" 
            height="150" 
            width="150" 
            className="d-inline-block">
          </img>
          <a className="navbar-brand" href="/" className="fs-1">
            Bay Area Beavers
          </a>
        </div>
        <ul className="navbar-nav gap-3">
          <Link to="/" className="nav-link fs-2">Home</Link>
          <Link to="/history" className="nav-link fs-2">History</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;