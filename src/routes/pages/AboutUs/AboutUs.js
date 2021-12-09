import React from 'react';
import hotel1 from '../../../assets/img/hotel-1.jpg';
import hotel2 from '../../../assets/img/hotel-2.jpg';
import hotel3 from '../../../assets/img/hotel-3.jpg';
import Header from '../../../components/common/Header';
import Navbar from '../../../components/common/Navbar';
import ContainerHeader from '../../../components/common/ContainerHeader';
import Content from './Content';


class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: 'about'
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
                    <div className="view-container about">
                        <ContainerHeader
                            page={this.state.page} 
                            title={'About us'}
                            link={'Contact us'}
                        />
                      <div className="about-content">
                          <Content />
                      </div>
                    </div>
                   
                   
                </div>
                
		  </div>
         );
    }
}
 
export default AboutUs;