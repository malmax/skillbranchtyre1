'use strict';

console.log('Клиент делает GET запрос с параметрами Query: ?a и ?b в которых записаны числа, необходимо вывести сумму этих чисел. Результат нужно вывести в виде строки. Если какой-то параметр не передан или не конвертируется в число, он считается равных нулю (0).');


var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/task1', function (req, res) {
  var a = parseInt(req.query.a) || 0;
  var b = parseInt(req.query.b) || 0;
  res.send((a + b).toString());
});

app.get('/task2', function (req, res) {
  var fullname = req.query.fullname || '';
  fullname = fullname.replace(/\s{2,}/g, ' ').trim().toLowerCase();

  if(/(\d|_|\/|\\|\-)/.test(fullname))
    fullname = '';

  var result = fullname.split(' ');

  switch(result.length) {
    case 1:
      result = result[0].charAt(0).toUpperCase() + result[0].slice(1);
      break;
    case 2:
      result = `${result[1].charAt(0).toUpperCase() + result[1].slice(1)} ${result[0].charAt(0).toUpperCase()}.`;
      break;
    case 3:
      result = `${result[2].charAt(0).toUpperCase() + result[2].slice(1)} ${result[0].charAt(0).toUpperCase()}. ${result[1].charAt(0).toUpperCase()}.`;
      break;
    default:
      result = 'Invalid fullname';
  }

  if(!result.length)
    result = 'Invalid fullname';

  console.log(req.query.fullname, '--', result);

  res.send(result);

});

app.listen(3500, function () {
  console.log('Example app listening on port 3500!');
});
