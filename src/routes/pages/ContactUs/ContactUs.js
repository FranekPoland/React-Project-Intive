import React from "react";
import hotel1 from '../../../assets/img/hotel-1.jpg';
import hotel2 from '../../../assets/img/hotel-2.jpg';
import hotel3 from '../../../assets/img/hotel-3.jpg';
import Header from '../../../components/common/Header';
import Navbar from '../../../components/common/Navbar';
import ContainerHeader from '../../../components/common/ContainerHeader';
import Content from './Content';


class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: 'contactus',
         }
    }

    // var regex = /[/\S+@\S+\.\S+/]/g
    // Validation in progress, not working, not finished yet

    function showErr(msg) {
        document.getElementById('').innerHtml(msg);
    }

    function hideErr() {
            document.getElementById('').innerHtml('');
            document.getElementById('').style.display = "none";
    }



    function ValidateForm() {
        hideErr();
        var name = documentQuerySelector('.client-name');
        var email = documentQuerySelector('.email');
        var phone = documentQuerySelector('.phone');
        var msg = documentQuerySelector('.msg');
        var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
            if (name.length === '' || name === undefined) {
                showErr('Please type Your name');
                return false
            } else {
                return true
            }

            if (email === '') {
                showErr('Please type your email');
                return false
            } else if (!regEx.test(email)) {
                showErr('Invalid email address');
            } else {
                return true
            }

            if (phone.trim().length < 9 ) {
                showErr('Invalid phone number');
                return false
            } else {
                return true
            }

            if (msg.length <= 3) {
                showErr('The message should be at least 10 characters long');
                return false
            } else {
                return true
            }
    }




    render() { 
        return ( 
            <div className="main">
                <Header />
                <Navbar />
                <div className="container">
                    <div className="clearfix img-container">
                        <img className="imgbox img" src={hotel1} alt="hotel1"></img>
                        <img className="imgbox img" src={hotel2} alt="hotel2"></img>
                        <img className="imgbox img" src={hotel3} alt="hotel3"></img>
                    </div>
                    <div className="view-container">
                         <ContainerHeader 
                            page={this.state.page}
                            title={'CONTACT US'}
                            link={'Hotel'}
                        />
                        <div className="contactus-content">
                            <Content />
                        </div>
                    </div>
               
               
            </div>
            
      </div>
         );
    }
}
 
export default ContactUs;