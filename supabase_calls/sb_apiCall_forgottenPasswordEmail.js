var XMLHttpRequest = require('xhr2');

var sUPABASEURL =  'https://dafhhmqygsxbfzdnhkxk.supabase.co';
var sUPABASEKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMxOTE5NDcxLCJleHAiOjE5NDc0OTU0NzF9.lkTeRI15vFk3izupWlTzAzQOSSO8446M_KmWI_aOyVc';
var userEmail = 'briangoins25@gmail.com'; 


var xhttp; 
xhttp = new XMLHttpRequest(); 

var url = sUPABASEURL + '/auth/v1/recover'

//Open XMLHttpRequest
xhttp.open("POST", url, true);


//Set Request Headers
xhttp.setRequestHeader('Content-Type', 'application/json');
xhttp.setRequestHeader('apikey', sUPABASEKEY);


xhttp.onreadystatechange = function() {//Call a function when the state changes.
    console.log(xhttp.responseStatus, xhttp.responseText);
    if(xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp.responseStatus, xhttp.responseText);
    }
}


var data = {
    'email' : userEmail
};


xhttp.send(JSON.stringify(data));