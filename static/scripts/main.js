var input = document.querySelector('input');
var form = document.querySelector('form');
var loc;
var jsonString;
var  objRequest;

// console.log(divRoot);
form.onsubmit = function (e) {
    e.preventDefault();
    loc = input.value;
    input.value = '';
    console.log(loc);
    sendRequest();
}

function sendRequest () {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.nestoria.com.br/api?encoding=json&pretty=1&action=search_listings&country=br&listing_type=buy&place_name='+loc,true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Accept', 'application/json')
    // request.responseType = 'json';

    request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    console.log(request.responseText)
        jsonString = request.responseText;
        objRequest = JSON.parse(jsonString);
        
        console.log(objRequest);
        console.log(objRequest.response.listings[0].img_url);
        // drawResult(objRequest);
        
        
    }
};

request.send();

}


// function drawResult (objRequest){
//     window.open('resultPage.html');
//     var divBox = document.createElement('div');
//     var img = document.createElement('img');
//     var price = document.createElement('p');
//     var description = document.createElement('p');
    
    
    
//     img.setAttribute('src',objRequest.response.listings[0].img_url)
//     var divRoot = document.getElementById('root');
//     divRoot.appendChild(img);
// }





