const express = require('express');
const app = express();

app.set('port', 8080);

let start = 0;
const count = () => {
  return (start = start + 1);
};

app.use('/stat', function (request, response) {
  response.send('Текущее значение счетчика + 1 = ' + count());
});

app.use('/about', function (request, response) {
  response.setHeader('Content-type', 'text/html');
  response.send('<h3>Hello, 77wiz77</h3>');
});

app.use('/', function (request, response) {
  response.send('Текущеее значение счетчика = ' + start);
});

//app.listen(8080);
app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
