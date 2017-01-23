import React from 'react';
import {withRouter} from 'react-router';
import SearchBar from './Search/SearchBar.jsx';
import NavBar from './nav/navigation'

//import Calendar from './Calendar/Calendar.jsx'
//<Calendar />

const Home = withRouter(React.createClass({
  render() {
    return(
      <div>       
        <div className="background">
           
             <div style={{width: '100vw', height: '100vh'}} data-vide-bg={require("./images/Underground-Traffic.mp4")} data-vide-options=" position: 0% 0%"></div>
             <div className="overlay">
                <center>  <h1 id="welcome">WELCOME TO DREAM LAND</h1> </center>
                 <center> <SearchBar /> </center>
             </div>
       </div>
        


    </div>
    )
  }
}));

export default Home;