let input = document.querySelector('input');
let form = document.querySelector('form');
let value;
form.onsubmit = function (e) {
    e.preventDefault();
    value = input.value;
    input.value = '';
    console.log(value);
}


let request = new XMLHttpRequest();
// request.withCredentials = true

request.open('GET', 'https://api.nestoria.co.uk/api?action=echo&encoding=json&parameter=value',true);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json')
request.setRequestHeader('Access-Control-Allow-Origin', '*');
request.responseType = 'json';
request.setRequestHeader('Content-Type', 'application/json');

request.onload = function () {
    
    var response = request.response;
    console.log = (response);
}




request.send();