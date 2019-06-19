import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Search from './pages/search.js';
import ResultList from './pages/results.js';
import PropertyDetails from './pages/propertyDetails';
class App extends Component {
    render() {
        return <div>
            <Route path='/' exact component={Search}></Route>
            <Route path='/listResult' component={ResultList}></Route>
            <Route path='/propertyDetails' component={PropertyDetails}></Route>
        </div>
    }
}

export default App;