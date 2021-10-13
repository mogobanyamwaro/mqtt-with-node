const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hive/com');

client.on('connect', function () {
  setInterval(function () {
    const random = Math.random() * 50;
    console.log(random);
    if (random > 30) {
      client.publish('mogoba', 'just made it : ' + random.toString());
    }
  }, 3000);
});
