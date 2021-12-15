import './Content.css';


function Content(props) {
    return ( 
        <div className="card3">
            <div className="room">
                <div className="room-imgbox">
                    <img className="room-img" src={props.image}></img>
                </div>
                <div className="room-info">
                    <div className="room-txt">{props.title}</div>
                    <div className="room-txt">
                        Price: {props.price} {props.currency.toUpperCase()}
                    </div>
                </div>
                <div className="room-info">
                    <div className="room-txt">Room size: {props.size}</div>
                </div>
            </div>
        </div>
     );
}

export default Content;