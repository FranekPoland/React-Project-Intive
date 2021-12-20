import './Content.css';

function Content() {
    return ( 
        <div className="card3">
             <div className="input-box">
                 <div className="input-comment">
                    If you have any questions please send us a message
                </div>
                 <div>
                    <input className="input-contact client-name" type="text" placeholder="Name and Surname" name="surname"/>
                    <span id="contact-name" className="feedback"></span>
                </div>
                <div>
                    <input className="input-contact email" type="text" placeholder="E-mail" name="email"/>
                    <span id="email" className="feedback"></span>
                </div>
                <div>
                    <input className="input-contact phone" type="text" placeholder="Phone number" name="phone"/>
                    <span id="phone" className="feedback"></span>
                </div>
                <div>
                    <textarea rows="6" className="textarea-contact msg" type="text" placeholder="Describe your message..."></textarea>
                    <span id="msg" className="feedback"></span>
                </div>
                <div className="send">
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