var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3001,function () {
  console.log('Server up on port 3001');
})
//sudo netstat -lnp
//sudo kill sudo lsof -t -i:9001`
