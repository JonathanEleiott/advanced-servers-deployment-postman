const bunnies = require('./bunnies.js');
let idNumber = 6;

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('HELLO WORLD!');
});

app.post('/bunnies', (req, res) => {
  // console.log(req.body);
  const { name } = req.body;

  bunnies.push({
    id: idNumber,
    name
  });

  idNumber++;

  res.send(bunnies);
});

// app.delete('/bunnies/:id', (req, res) => {
//   // check if the bunny with the given id exists
//   // remove it from the array

//   res.send(bunnies);
// });

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
  console.log(`listening on PORT ${PORT}`);
});