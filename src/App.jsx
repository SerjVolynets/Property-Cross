import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from './pages/search';
import ResultList from './pages/results';
import PropertyDetails from './pages/propertyDetails';
import FavoritesList from './pages/favoritesList';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Search} />
        <Route path="/listResult" component={ResultList} />
        <Route path="/propertyDetails" component={PropertyDetails} />
        <Route path="/favorites" component={FavoritesList} />
      </div>
    );
  }
}

export default App;
