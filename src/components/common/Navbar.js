import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (  
        <div className="navbar">
            <ul>
                <li id="about" className="button nav-item"> <Link className="router-link" to="/aboutus">ABOUT US</Link></li>
                <li id="home" className="button nav-item"> <Link className="router-link" to="/hotel">HOTEL</Link></li>
                <li id="contact" className="button nav-item"><Link className="router-link" to="/contactus">CONTACT US</Link></li>
                <li id="rooms" className="button nav-item">ROOMS</li>
            </ul>
                <div className="footer-navbar">
                    © 2021 All rights reserved.
                </div>
        </div>
    );
}

export default Navbar;