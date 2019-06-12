
window.onload = function () {
    let objFromLocal = JSON.parse(localStorage.getItem('myStorage'));
    drawResult(objFromLocal);

    function drawResult (value){
    
        let divRoot = document.getElementById('root');
        
        if (value.response.listings.length != 0) {
            for (var i=0; i<value.response.listings.length; i++) {
                let divBox = document.createElement('div');
                let img = document.createElement('img');
                let priceProperty = document.createElement('p');
                let description = document.createElement('p');
                
                img.setAttribute('src', value.response.listings[i].img_url);
                priceProperty.textContent += value.response.listings[i].price + ' ' + '£';
                description.textContent += value.response.listings[i].title;
        
                divBox.appendChild(img);
                divBox.appendChild(priceProperty);  
                divBox.appendChild(description);
                divRoot.appendChild(divBox);
            }
        }
        else {
          let divAlert = document.createElement('div');
          let pAlert = document.createElement('p');

          pAlert.textContent += 'Sorry, there are not places in the UK called' + ' '+'\"'+value.request.location+'\"';
          divAlert.appendChild(pAlert);
          divRoot.appendChild(divAlert);
        // alert('Sorry, there are not places in the UK called' + ' '+'\"'+value.request.location+'\"');
    
        }   
    }
}
    

    

    

