import React from 'react';
import {withRouter} from 'react-router';
import SearchBar from './Search/SearchBar.jsx';

const Home = withRouter(React.createClass({
  render() {
    return(
      <div>
      	<h1>Dream Land</h1>
        <SearchBar />
      </div>
    )
  }
}));

export default Home;