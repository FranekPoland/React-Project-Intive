import './Content.css';

function Content(props) {
    return ( 
        <div className="card3">
             <div className="input-box">
                 <div className="input-comment">
                    If you have any questions please send us a message
                </div>
                 <div>
                    <input className="input input-contact client-name" 
                    id="client_name"
                    type="text" 
                    placeholder="Name and Surname" 
                    onKeyUp={(e) => props.updateState(e)}/>
                    <span id="contact_name" className="feedback"
                    ></span>
                </div>
                <div>
                    <input className="input input-contact email" 
                    type="text" 
                    placeholder="E-mail"
                    onKeyUp={(e) => props.updateState(e)} 
                    id="client_email"/>
                    <span id="contact_email" className="feedback"></span>
                </div>
                <div>
                    <input className="input input-contact phone" 
                    type="text" 
                    placeholder="Phone number"
                    onKeyUp={(e) => props.updateState(e)} 
                    id="client_phone"/>
                    <span id="contact_phone" className="feedback"></span>
                </div>
                <div>
                    <textarea rows="6" className="input textarea-contact msg"
                    id="client_msg" 
                    type="text" 
                    onKeyUp={(e) => props.updateState(e)}
                    placeholder="Describe your message..."></textarea>
                    <span id="contact_msg" className="feedback"></span>
                </div>
                <div type="button" className="send"
                onClick={() => props.handelOnClick()}>
                    SEND MESSAGE
                </div>
            </div>
                <div className="contact-text">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </div>
        </div>
     );
}

export default Content;