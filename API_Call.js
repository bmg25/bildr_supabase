if (!INPUT_ARGUMENTS.url) {
	RESPONSE_OBJECT.STATUS = 'fail';
	RESPONSE_OBJECT.MESSAGE = 'no url';
}
var xhttp;
xhttp = new XMLHttpRequest();
var method = (INPUT_ARGUMENTS.method && (" GET POST PUT DELETE ").indexOf(" " + INPUT_ARGUMENTS.method + " ") >= 0) ? INPUT_ARGUMENTS.method : 'GET';
xhttp.open(method, INPUT_ARGUMENTS.url);
if (INPUT_ARGUMENTS.headers) {
	var oHeaders = INPUT_ARGUMENTS.headers; /*try { 			oHeaders = JSON.parse(INPUT_ARGUMENTS.headers); 		} catch (e) { 			oHeaders = false; 		}*/ if (oHeaders) {
		for (var key in oHeaders) {
			if (oHeaders.hasOwnProperty(key)) {
				xhttp.setRequestHeader(key, oHeaders[key]);
			}
		}
	}
}
xhttp.onreadystatechange = function () {
	if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
		//console.log(xhttp.responseText);
		RESPONSE_OBJECT.OUTPUT_ARGUMENTS.httpStatus= xhttp.status;

		RESPONSE_OBJECT.OUTPUT_ARGUMENTS.response =xhttp.responseText;
		try{var data = JSON.parse(xhttp.responseText);
			if (bapi.helper.isString(data)) data= JSON.parse(data);
    
    		RESPONSE_OBJECT.OUTPUT_ARGUMENTS.response=data.response;
    		RESPONSE_OBJECT.OUTPUT_ARGUMENTS.content=data.content;
    		RESPONSE_OBJECT.OUTPUT_ARGUMENTS.statusCode=data.statusCode;
		}catch(e){}
		
		QueueExecNextActions(QUEUE_ACTION);
		
	}
};
xhttp.send(INPUT_ARGUMENTS.content);
