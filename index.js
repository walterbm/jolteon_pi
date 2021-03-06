const express = require('express');
const app = express();
const Gpio = require('onoff').Gpio;

const led = new Gpio(16, 'out');
const relay = new Gpio(17, 'out');

app.get('/', function (req, res) {
  res.send('Welcome to the Raspberry Pi API');
});

app.get('/led', function (req, res) {
  led.writeSync(led.readSync() === 0 ? 1 : 0);
  res.send(`led status ${led.readSync()}`);
});

app.get('/relay', function (req, res) {
  relay.writeSync(relay.readSync() === 0 ? 1 : 0);
  res.send(`relay status ${relay.readSync()}`);
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
