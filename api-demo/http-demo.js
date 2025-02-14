let http = require('http');     // 내장 모듈 http 호출

function onRequest(request, response) {
    response.writeHead(200, {'Content-type' : 'text/html'});
    response.write('Hello, node.js');
    response.end();
}

http.createServer(onRequest).listen(8888);
// createServer 실행 후 onRequest 콜백 함수 호출