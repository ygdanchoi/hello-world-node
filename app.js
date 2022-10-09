const express = require('express');
const { uniqueNamesGenerator, names } = require('unique-names-generator');

const app = express();
const port = 3000;

app.use((req, res, next) => setTimeout(next, 2000));

app.get('/people', (req, res) => {
  if (Math.random() <= 1) { // error rate
    const response = [];
  
    for (let i = 0; i < 30; i++) {
      response.push({
        name: uniqueNamesGenerator({
          dictionaries: [names]
        })
      });
    }
  
    res.send(response);
  } else {
    res.status(500).send({
      error: 'request failed'
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
