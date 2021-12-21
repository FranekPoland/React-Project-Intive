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
            client_name: '',
            client_email: '',
            client_phone: '',
            client_msg:'',
            isValid: false
         }
    }

    updateState(e) {
        const key = e.target.id;
        const value = e.target.value;
        this.setState({[key]: value}); 
    }

    sendMessage() {
        const name = this.state.client_name
        const feedback = document.querySelector('.feedback_message');
        feedback.innerHTML = '';
        feedback.innerHTML = 'Thank you ' + name + ' for a message, we will contact you as soon as possible';
    }

    handleOnClick() {
        const feedback = document.querySelector('.feedback_message');
        feedback.innerHTML = '';
        if (this.isValid()) {
            this.sendMessage();
        }
        
    }

    showErr(error) {
        const id = 'contact_' + error.field;
        const inputId = 'client_' + error.field;
        const msg = error.msg;
        document.getElementById(id).innerHTML = msg;
        document.getElementById(inputId).classList.add('error');
    }

     hideErr() {
        document.querySelectorAll('.feedback').forEach((elem) =>{
            elem.innerHTML = '';
        });
        document.querySelectorAll('.error').forEach((elem) => {
            elem.classList.remove('error');
        });
    }

    isValid() {
        this.hideErr();
        let isVal = true;
        var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if ( this.state.client_name === '') {
                this.showErr({msg: 'Please type Your name', field: 'name'});
                isVal = false;
            } 
            if (this.state.client_email === '') {
                this.showErr({msg: 'Please type Your email adress', field: 'email'});
                isVal = false;
            } else if (!regEx.test(this.state.client_email)) {
                this.showErr({msg: 'Invalid email adress, try once again', field: 'email'});
                isVal = false;
            } 
            if (this.state.client_phone.trim().length < 9 ) {
                this.showErr({msg: 'Invalid phone number', field: 'phone'});
                isVal = false;
            }
            if (this.state.client_msg.length < 3) {
                this.showErr({msg: 'The message should be at least 3 characters long', field: 'msg'});
                isVal = false;
            }
            return isVal;
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
                            <Content 
                            updateState={(e) => this.updateState(e)}
                            handelOnClick={() => this.handleOnClick()}
                            />
                        </div>
                    </div>
               
               
            </div>
            
      </div>
         );
    }
}
 
export default ContactUs;