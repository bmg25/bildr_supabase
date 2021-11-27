var sUPABASEURL =  INPUT_ARGUMENTS.sUPABASEURL;
var sUPABASEKEY = INPUT_ARGUMENTS.sUPABASEKEY;
var userEmail = INPUT_ARGUMENTS.userEmail; 

var targetPage = INPUT_ARGUMENTS.targetPage?INPUT_ARGUMENTS.targetPage:"current";
if (INPUT_ARGUMENTS.useBrwFormRoot) {targetPage ="root";}

var xhttp; 
xhttp = new XMLHttpRequest(); 

var url = sUPABASEURL + '/auth/v1/magiclink'

//Open XMLHttpRequest
xhttp.open("POST", url, true);


//Set Request Headers
xhttp.setRequestHeader('Content-Type', 'application/json');
xhttp.setRequestHeader('apikey', sUPABASEKEY);


xhttp.onreadystatechange = function() {//Call a function when the state changes.
    
    
    
    if(xhttp.readyState == 4) {
        console.log(xhttp.responseText);
        RESPONSE_OBJECT.OUTPUT_ARGUMENTS.httpStatus= xhttp.status;
        RESPONSE_OBJECT.OUTPUT_ARGUMENTS.response = xhttp.responseText;
        
        QueueExecNextActions(QUEUE_ACTION); 
    }
}


var data = {'email' : userEmail};


xhttp.send(JSON.stringify(data));