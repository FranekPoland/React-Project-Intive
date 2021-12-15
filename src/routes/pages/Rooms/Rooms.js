import React from 'react';
import hotel1 from '../../../assets/img/hotel-1.jpg';
import hotel2 from '../../../assets/img/hotel-2.jpg';
import hotel3 from '../../../assets/img/hotel-3.jpg';
import Header from '../../../components/common/Header';
import Navbar from '../../../components/common/Navbar';
import ContainerHeader from '../../../components/common/ContainerHeader';
import Content from './Content';
import roomsObj from '../../../assets/data/rooms.json';


class Rooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: 'rooms',
            isSearch: true,
         }
    }
    render() { 
        const rooms = roomsObj.rooms;
        const roomsList = rooms.map((room) => {
           return (<li key={room.id}>
                 <Content title={room.title}
                          price={room.price}
                          currency={room.currency}
                          size={room.size}
                          image={room.image}
                 />
                    </li>)
        }
    );
    
        return ( 
            <div className="main">
                <Header 
                    isSearch={true}
                    />
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
                            title={'ROOMS'}
                            link={'About us'}
                        />
                        <div className="rooms-content">
                          {/* */}
                          <ul>{roomsList}</ul>
                      </div>
                    </div>

                </div>

            </div>
         );
    }
}
 
export default Rooms;