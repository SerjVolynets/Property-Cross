let input = document.querySelector('input');
let loc;
let jsonString;
let objRequest;

function onPress() {
    loc = input.value;
    input.value = '';
    console.log(loc);
    sendRequest();
}

function sendRequest() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=' + loc, false);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Accept', 'application/json');

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(request.responseText)
            jsonString = request.responseText;
            objRequest = JSON.parse(jsonString);
            localStorage.setItem('myStorage', JSON.stringify(objRequest));
            window.open('resultPage.html');
        }
    };
    request.send();
};







