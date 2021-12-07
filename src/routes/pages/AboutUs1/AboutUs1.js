import React from 'react';
import './AboutUs1.css';
import Header from '../../../components/common/Header';
import Navbar from '../../../components/common/Navbar';
import ViewHeader from '../../../components/common/ViewHeader';


class AboutUs1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="main">
				<Header />
				<Navbar />
                <ViewHeader />
		  </div>
         );
    }
}
 
export default AboutUs1;