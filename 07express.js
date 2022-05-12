const express = require("express");
const path = require("path");


const app = express();

app.use((req, res, next) => {
	console.log('Hello!');
	next();
});

app.use((req, res, next) => {
	console.log('World!');
	next();
});

// middleware 
app.get('/', (req, res) => {
    // res.write('<head><meta charset="utf-8" /></head>')
    // res.write('<body>')
    // res.write('<h1>這是首頁</h1>')
    // res.write('</body>')
    res.status(200).sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, ()=> {
	console.log("server is running at port 3000");

})