import './Navbar.css'

function Navbar() {
    return (  
        <div className="navbar">
            <ul>
                <li id="about" className="button nav-item">ABOUT US</li>
                <li id="home" className="button nav-item">HOTEL</li>
                <li id="contact" className="button nav-item">CONTACT US</li>
            </ul>
                <div className="footer-navbar">
                    © 2021 All rights reserved.
                </div>
        </div>
    );
}

export default Navbar;