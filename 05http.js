const http = require("http");

const server = http.createServer((req, res) => {
	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' }); //content type
		return res.end('<h1>This is home page</h1>');
	} 
	else if(req.url === `/login`){
		res.writeHead(200, { 'Content-Type': 'text/html' }); //content type
		return res.end('<h1>This is login page</h1>');		
	}
	res.end();
});

server.listen(3000, () => {
	console.log('running server on port 3000');
});

