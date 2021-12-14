import './CardLeft.css';
import user3 from '../../../assets/img/user-3.jpg';
import user4 from '../../../assets/img/user-4.jpg';
import user5 from '../../../assets/img/user-5.jpg';
import user6 from '../../../assets/img/user-6.jpg';

function CardLeft() {
    return ( 
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

     );
}

export default CardLeft;


