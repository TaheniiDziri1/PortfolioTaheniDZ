

import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const imageSource = ""
    return (
    <div className="navbar">
        {imageSource && <img src={imageSource} alt="logo" />} {/* Image uniquement si la source est définie */}
        <div>
            <Link className="nav-menu" to="/Home" >Home</Link>
            <Link className="nav-menu" to="/about">About Me</Link>
            <Link className="nav-menu" to="/services">Services</Link>
            <Link className="nav-menu" to="/contact">Contact</Link>
        </div>
        <div>
            <Link className="nav-connect" to="/contact">
                Connect With Me
            </Link>
        </div>

    </div>
)
}

export default Navbar