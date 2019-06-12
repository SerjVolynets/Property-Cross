import {objRequest} from './index.js';

window.onload = function () {

console.log(objRequest);
    function drawResult (value){
    
        var divBox = document.createElement('div');
        var img = document.createElement('img');
        var price = document.createElement('p');
        var description = document.createElement('p');
        
        
        
        img.setAttribute('src', value.response.listings[0].img_url)
        var divRoot = document.getElementById('root');
        divRoot.appendChild(img);
    }
    
    
    drawResult(objRequest);
    
}
