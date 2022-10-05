const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => setTimeout(next, 2000));

app.get('/people', (req, res) => {
  res.send(peopleResponse());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

function peopleResponse() {
  return [
    { name: "anita" },
    { name: "bertha" },
    { name: "caleb" },
    { name: "darcy" },
    { name: "emilio" },
    { name: "fabian" },
    { name: "gustavo" },
    { name: "hephaestus" },
    { name: "ignacio" },
    { name: "juarez" },
    { name: "katerina" },
    { name: "lennox" },
    { name: "maximilian" },
    { name: "napoleon" },
    { name: "ophelia" },
    { name: "paulina" },
    { name: "quinn" },
    { name: "rasputin" },
    { name: "sophocles" },
    { name: "tiberius" },
    { name: "ursula" },
    { name: "valentino" },
    { name: "winston" },
    { name: "xavier" },
    { name: "yolanda" },
    { name: "zechariah" },
  ];
}