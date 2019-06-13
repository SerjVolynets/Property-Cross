import React,{Component} from 'react';


class Search extends Component {
   
    state = {
        valueInput: ''
    }
    
   
    takeInputValue = (event)=>{
        this.setState({valueInput:event.target.value});
   }

    buttonClick = (event) =>{
        
        event.preventDefault();
        if(!this.state.valueInput.length) {
            return;
        }
        this.setState({valueInput:''})
        console.log(this.state.valueInput); 
        this.seenRequest();
        
   }

   seenRequest = function sendRequest () {
            let loc = this.state.valueInput;
            console.log(loc);
            // let jsonString;
            // let objRequest; 
            let request = new XMLHttpRequest();
           
            request.open('GET', 'https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name='+loc,false);
            request.setRequestHeader('Content-Type', 'application/json');
            request.setRequestHeader('Accept', 'application/json');
   
            request.onreadystatechange =  () => {
                if (this.readyState === 4 && this.status === 200) {
                 console.log(1);
                 console.log(request.responseText);
                //  jsonString = ;
                 let objRequest = JSON.parse(request.responseText);
                 console.log(objRequest);
                //  localStorage.setItem('myStorage', JSON.stringify(objRequest));
                 //  window.open('resultPage.html');    
                
             }
             else console.log('error');
                request.send();
            }
   }
    
    render () {
        
        return <div>
            <form onSubmit = {() => false}>
                <input type="text" onChange={this.takeInputValue} value={this.state.valueInput} />
                <button onClick={this.buttonClick}>Go</button>
            </form>
        </div>
    }
}

export default Search;