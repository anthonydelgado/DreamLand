import React from 'react';
import {withRouter} from 'react-router';
import SearchBar from './Search/SearchBar.jsx';

//import Calendar from './Calendar/Calendar.jsx'
//<Calendar />

const Home = withRouter(React.createClass({
  render() {
    return(
      <div>
      	<h1 id="welcome">WELCOME TO DREAM LAND</h1>
        <SearchBar />
      </div>
    )
  }
}));

export default Home;