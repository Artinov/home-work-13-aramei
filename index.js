var http = require('http');
var port = 3000;

var server = http.createServer(function(request, response) {
    var regExp = /(\/|\*|\+|\-)/g;
    var parsedArray = request.url.substring(1).split(regExp);

    var a = parseInt(parsedArray[0]);
    var b = parseInt(parsedArray[2]);
    var operand = parsedArray[1];

    switch(operand) {
    	case "+":
    		result = a + b;
    		response.end(result.toString());
    		break;
    	case "-":
			result = a - b;
    		response.end(result.toString());
    		break;
    	case "*":
    		result = a * b;
    		response.end(result.toString());
    		break;
    	case "/":
    		result = a / b;
    		response.end(result.toString());
    		break;
    	default:
    		response.end("Sorry, you have input wrong data");
    		break;
    }

});

server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + "to see your app");
})