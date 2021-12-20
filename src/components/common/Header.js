import React from 'react';
import './Header.css';
import user from '../../assets/img/user.jpg';
import logo from '../../assets/img/logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         }
    }
    
    render() { 
        let search = '';
        if (this.props.isSearch) {
            search = <div className="box2">
                        <input className="search-container" 
                        type="text"  
                        onKeyUp={(letter) => this.props.search1(letter.target.value)} 
                        placeholder="Search rooms" 
                        name="search"/>
                    </div>
        }

        return ( 
            <div className="header"> 
                    <div className="box1">
                        <img className="logo" src={logo} alt="logo"></img>
                    </div>
                {search}
                <div className="box3">
                    <img className="header-img" src={user} alt="user"></img>
                    <div className="user-name">
                        Hi John
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;