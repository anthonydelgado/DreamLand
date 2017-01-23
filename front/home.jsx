import React from 'react';
import {withRouter,Link} from 'react-router';
import SearchBar from './Search/SearchBar.jsx';
import Jquery from 'jquery';
import Login from './login.jsx';
import Register from './register.jsx';

const Home = withRouter(React.createClass({
  render() {
    return(
      <div>
         
       
        <div className="background">
        
           
             <div style={{width: '100vw', height: '100vh'}} data-vide-bg={require("./images/Manhatten-Night.mp4")} data-vide-options=" position: 0% 0%"></div>
             <div className="overlay">
             <div id="sign">
            <h1 id="signIn"><Link to="login"> Sign In  /</Link></h1><h1 id="signUp"><Link to="register">Sign Up</Link></h1> 
            </div>
                <center>  <h1 id="welcome">Welcome to Dream Land</h1> </center>
                 <center> <SearchBar /> </center>
             </div>
             
       </div>
        
    </div>
    )
  }
}));

export default Home;


   