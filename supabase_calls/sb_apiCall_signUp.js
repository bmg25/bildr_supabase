var XMLHttpRequest = require('xhr2');

var sUPABASEURL =  'https://dafhhmqygsxbfzdnhkxk.supabase.co';
var sUPABASEKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMxOTE5NDcxLCJleHAiOjE5NDc0OTU0NzF9.lkTeRI15vFk3izupWlTzAzQOSSO8446M_KmWI_aOyVc';
var userEmail = 'bmitchellg77@gmail.com'; 
var userPass = '1650-Mile'


var xhttp; 
xhttp = new XMLHttpRequest(); 

var url = sUPABASEURL + '/auth/v1/signup'

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
    'email' : userEmail,
    'password' : userPass
};


xhttp.send(JSON.stringify(data));