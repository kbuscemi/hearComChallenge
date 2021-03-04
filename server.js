var express = require('express');
var app = express();
app.use(express.static(__dirname));

var port = process.argv[2] || 3000;
app.listen(port);
console.log('app listening on port ' + port);