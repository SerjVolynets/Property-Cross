import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Search from './pages/search.js';
import ResultList from './pages/results.js';
import PropertyDetails from './pages/propertyDetails';
import FavoritesList from './pages/favoritesList';
class App extends Component {
    render() {
        return <div>
            <Route path='/' exact component={Search}></Route>
            <Route path='/listResult' component={ResultList}></Route>
            <Route path='/propertyDetails' component={PropertyDetails}></Route>
            <Route path='/favorites' component={FavoritesList}></Route>
        </div>
    }
}

export default App;