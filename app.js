const express = require('express');
const { uniqueNamesGenerator, names } = require('unique-names-generator');

const app = express();
const port = 3000;

app.use((req, res, next) => setTimeout(next, 1000));

app.get('/people', (req, res) => {
  if (Math.random() <= 0.8) { // error rate
    const response = [];
  
    for (let i = 0; i < 30; i++) {
      response.push({
        name: uniqueNamesGenerator({
          dictionaries: [names]
        })
      });
    }
  
    console.log('200', response);
    res.send(response);
  } else {
    console.log('500', 'internal error');
    res.status(500).send({
      error: 'internal error'
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
