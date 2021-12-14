import React from 'react';
import hotel1 from '../../../assets/img/hotel-1.jpg';
import hotel2 from '../../../assets/img/hotel-2.jpg';
import hotel3 from '../../../assets/img/hotel-3.jpg';
import Header from '../../../components/common/Header';
import Navbar from '../../../components/common/Navbar';
import ContainerHeader from '../../../components/common/ContainerHeader';
import CardLeft from './CardLeft';
import CardRight from './CardRight';
import './Hotel.css';
// TODO DELETE after finish with new comp import Content from './Content';


class Hotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: 'hotel'
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
                            title={'HOTEL DE LAS PALMAS'}
                            link={'Albufeira, Portugal'}
                            rating={8.6}
                            votes={429}
                     />
                      <div className="hotel-content">
                          <CardLeft />
                          <CardRight />
                          {/* <Content /> */}
                      </div>
                    </div>
                   
                   
                </div>
                
		  </div>
         );
    }
}
 
export default Hotel;