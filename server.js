const express = require('express'); //from documentation: express is function
const app = express(); //app is an object

const fruits = [
  {
    name: 'apple',
    color: 'red',
    readyToEat: true,
  },
  {
    name: 'pear',
    color: 'green',
    readyToEat: false,
  },
  {
    name: 'banana',
    color: 'yellow',
    readyToEat: true,
  },
];

// Index route
app.get('/fruits/', (req, res) => {
  res.send(fruits);
});

// Show route
app.get('/fruits/:id', (req, res) => {
  res.send(fruits[req.params.id]);
});

app.listen(3000, () => {
  console.log('I am listening');
});
