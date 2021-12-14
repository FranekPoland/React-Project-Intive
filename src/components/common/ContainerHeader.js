import './ContainerHeader.css'



function ContainerHeader(props) {
    let rating = '';
    if (props.rating) {
            rating = <div className="rating">
                        <div className="score">
                            {props.rating}
                        </div>
                        <div className="votes">
                            {props.votes} votes
                        </div>
                    </div>
    }
    
    return (
        
            <div className="view-header">
                <div className={"header-"+props.page}>
                {props.title}
                </div>
                {rating}
                <div className={"link-"+props.page}>
                    <a href="#" className="link-contact">{props.link}</a> 
                </div>
            </div>   

     );
}

export default  ContainerHeader;