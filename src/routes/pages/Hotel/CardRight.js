import './CardRight.css';
import user1 from '../../../assets/img/user-1.jpg';
import user2 from '../../../assets/img/user-2.jpg';

function CardRight() {
    return ( 
        <div className="card-right card2 ">
            <div className="btn-booking">
                <div className="booking-text">
                    BOOK
                    NOW
                </div>
            </div>
            <div className="note1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                <div className="user-score">
                    <span className="user-photo">
                        <img className="photo" src={user1} alt="user1"></img>
                    </span>
                    <span className="user-info">
                        <a href="#" className="name">NICK SMITH</a>
                        <a href="#" className="date">Feb 23rd, 2017</a> 
                    </span>
                    <span className="score-info">
                        7.8
                    </span>
                </div>
            </div>
            <div className="note2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                <div className="user-score">
                    <span className="user-photo">
                        <img className="photo" src={user2} alt="user2"></img>
                    </span>
                    <span className="user-info">
                        <a href="#" className="name">MARY THOMAS</a>
                        <a href="#" className="date">Sept 13th, 2017 </a>
                    </span>
                    <span className="score-info">
                        9.3
                    </span>
                </div>
            </div>
            <div className="footer-link">
                <a href="#" className ="link">Show all &#8594;</a>
            </div>
    </div>
     );
}

export default CardRight;