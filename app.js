const express = require('express');
const { uniqueNamesGenerator, names } = require('unique-names-generator');

const app = express();
const port = 3000;

app.use((req, res, next) => setTimeout(next, 1000));

app.get('/people', (req, res) => {
  if (Math.random() <= 1.0) { // error rate
    const response = [];
  
    for (let i = 0; i < 30; i++) {
      response.push({
        name: uniqueNamesGenerator({
          dictionaries: [names]
        }),
        age: Math.ceil(Math.random() * 100),
        weight: Math.ceil(Math.random() * 300)
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
