import React from 'react';
import {withRouter} from 'react-router';
import SearchBar from './Search/SearchBar.jsx';
import NavBar from './nav/navigation'

const Home = withRouter(React.createClass({
  render() {
    return(
      <div>
      	<h1>Welcome to Dream Land</h1>
        <div><NavBar /></div>
        <SearchBar />

      </div>
    )
  }
}));

export default Home;
