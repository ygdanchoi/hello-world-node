const express = require('express');
const { uniqueNamesGenerator, names } = require('unique-names-generator');

const app = express();
const port = 3000;

app.use((req, res, next) => setTimeout(next, 2000));

app.get('/people', (req, res) => {
  const response = [];

  for (let i = 0; i < 30; i++) {
    response.push({
      name: uniqueNamesGenerator({
        dictionaries: [names]
      })
    });
  }

  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
