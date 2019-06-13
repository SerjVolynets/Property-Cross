import React, {Component} from 'react';
import Search from './components/search.js'



class App extends Component {
    render () {
        return <div>
                    <h1>Property Cross in UK</h1>
                    <p>Use the form below to search for houses to buy. You can search by place-name or postcode.</p>
                    <Search />
                </div>
    }
}

export default App;