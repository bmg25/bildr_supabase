var XMLHttpRequest = require('xhr2');

//Get Access Token
// var url = String(document.URL); 
var url = 'https://pf0a8451f6a9f4f82be293faa8599f968.bildr.com/#access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM2ODU2MDQ2LCJzdWIiOiI2YzBkYThjYS01MjAxLTRhZjMtYTc2Yi05OTc4YmUyZmRlYTYiLCJlbWFpbCI6ImJyaWFuZ29pbnMyNUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQifQ.rT_3GAHnUQHuqHYS9Lobv-Gm4sHre1QhilD1qcGQ_gw&expires_in=3600&refresh_token=HYMWuepdKS9eqtwduW18wA&token_type=bearer&type=invite';


var startMatch = url.indexOf('=');
var endMatch = url.indexOf('&');

var access_token = 'Bearer ' + url.substring(startMatch + 1, endMatch);

//Create Supabase / User Vars
var sUPABASEURL =  'https://dafhhmqygsxbfzdnhkxk.supabase.co';
var sUPABASEKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMxOTE5NDcxLCJleHAiOjE5NDc0OTU0NzF9.lkTeRI15vFk3izupWlTzAzQOSSO8446M_KmWI_aOyVc';
var userEmail = 'briangoins25@gmail.com'; 
var newPass = '1650-Mile'; 


//Set Up API Call 
var xhttp; 
xhttp = new XMLHttpRequest(); 

var url = sUPABASEURL + '/auth/v1/user'

//Open XMLHttpRequest
xhttp.open("PUT", url, true);


//Set Request Headers
xhttp.setRequestHeader('Content-Type', 'application/json');
xhttp.setRequestHeader('apikey', sUPABASEKEY);
xhttp.setRequestHeader('Authorization', access_token);

xhttp.onreadystatechange = function() {//Call a function when the state changes.
    console.log(xhttp.responseStatus, xhttp.responseText);
    if(xhttp.readyState == 4 && xhttp.status == 200) {
        console.log(xhttp.responseStatus, xhttp.responseText);
    }
}


var data = {
    'email' : userEmail,
    'password' : newPass
};

xhttp.send(JSON.stringify(data));