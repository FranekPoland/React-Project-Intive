import './ContainerHeader.css'




function ContainerHeader(props) {
    return (
    
            <div className="view-header">
                <div className={"header-"+props.page}>
                {props.title}
                </div>
                <div className={"link-"+props.page}>
                    <a href="#" className="link-contact">{props.link}</a> 
                </div>
                if (props.rating) {
                    <div className="rating">
                        8.6
                    <div className="score">
                        {props.rating}
                    </div>
                    <div className="votes">
                        429 votes   
                    </div>
                    
                    </div>
                } 
                
            </div>   

     );
}

export default  ContainerHeader;