const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hive/com');

client.on('connect', function () {
  client.subscribe('mogoba');
  console.log('client has subscribed');
});

client.on('message', function (topic, message) {
  console.log(message.toString());
});
