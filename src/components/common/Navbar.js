import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (  
        <div className="navbar">
            <ul>
            <Link className="router-link" to="/aboutus"><li id="about" className="button nav-item"> ABOUT US</li></Link>
            <Link className="router-link" to="/hotel"><li id="home" className="button nav-item">HOTEL</li></Link>
            <Link className="router-link" to="/contactus"><li id="contact" className="button nav-item">CONTACT US</li></Link>
                <li id="rooms" className="button nav-item">ROOMS</li>
            </ul>
                <div className="footer-navbar">
                    © 2021 All rights reserved.
                </div>
        </div>
    );
}

export default Navbar;