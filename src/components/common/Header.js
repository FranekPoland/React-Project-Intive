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
    handleKeyUp(e) {
        this.props.search(e.target.value)
    }
    render() { 
        let search = '';
        if (this.props.isSearch) {
            search = <div className="box2">
                        <input className="search-container" 
                        type="text"  
                        onKeyUp={(e) => this.props.search(e.target.value)} 
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



// function Header(props) {

//     myFunction() {
//         var x = document.getElementById("fname");
//           x.value = x.value.toUpperCase();
//     }
    

//     let search = '';
//     if (props.isSearch) {
//         search = <div className="box2">
//                     <input className="search-container" id="fname" type="text" onKeyUp={() => } placeholder="Search rooms" name="search"/>
//                 </div>
//     }



//     return ( 
//         <div className="header"> 
//              <div className="box1">
//                  <img className="logo" src={logo} alt="logo"></img>
//              </div>
//              {search}
//              <div className="box3">
//                 <img className="header-img" src={user} alt="user"></img>
//                 <div className="user-name">
//                     Hi John
//                 </div>
//             </div>
//     </div>
//      );
// }

