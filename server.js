// server.js


// init project
const express = require('express');
const app = express();


app.use(express.static('public'));


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami',function(req,res){
  //get ip address from req header
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers["accept-language"];
  const sysInfo = req.headers["user-agent"];
  
  const responseObj = {
    "ip adrress": ip,
    "language": language,
    "system info": sysInfo
  }
  res.send(responseObj);
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
