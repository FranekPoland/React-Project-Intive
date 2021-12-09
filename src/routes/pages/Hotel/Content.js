import './Content.css';
import user1 from '../../../assets/img/user-1.jpg';
import user2 from '../../../assets/img/user-2.jpg';
import user3 from '../../../assets/img/user-3.jpg';
import user4 from '../../../assets/img/user-4.jpg';
import user5 from '../../../assets/img/user-5.jpg';
import user6 from '../../../assets/img/user-6.jpg';


function Content() {
    return ( 
    <div className="content">
           <div className="card-left card1"> 
             <div className="hotel-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Animi nisi dignissimos debitis ratione sapiente saepe.
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
            </div>
            <div className="hotel-about"> Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto 
             voluptate delectus, inventore iure aliquid aliquam. 
            </div>  
             <hr className="break"/>
              <div className="hotel-info">
                  Close to the beach 
                  Free airport shuttle 
                  Air conditioning and heating 
                  We speak all languages 
                  Breakfast included 
                  Free wifi in all rooms 
                  Pets Allowed 
                  Perfect for families
            </div>
            <hr className="break"/>
         <div className="footer-info">
                <div className="recommendation">
                Lucy and 3 other friends recommended this hotel.    
                </div>
             <div className="photos-container">
                <div className="photos">
                    <img className="users-photo" src={user3} alt="user3"></img>
                    <img className="users-photo" src={user4} alt="user4"></img>
                    <img className="users-photo" src={user5} alt="user5"></img>
                    <img className="users-photo" src={user6} alt="user6"></img>
                </div>    
             </div>
         </div>                           
        </div>
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
    </div>
     );
}

export default Content;