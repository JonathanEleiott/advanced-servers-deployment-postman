const bunnies = require('./bunnies.js');
let idNumber = 6;

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('HELLO WORLD!');
});

app.post('/bunnies', (req, res, next) => {
  // console.log(req.body);
  const { name } = req.body;

  if(!name) {
    const error = new Error("Name not provided");
    next(error);
  } else {
    bunnies.push({
      id: idNumber,
      name
    });
  
    idNumber++;
  
    res.send(bunnies);
  }
});

// app.delete('/bunnies/:id', (req, res) => {
//   // check if the bunny with the given id exists
//   // remove it from the array

//   res.send(bunnies);
// });

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.log('ERROR MESSAGE', err.message);
  res.status(400).send(err.message);
});

// 404 HANDLER
app.use((req, res) => {
  res.status(404).send('Page Not Found!')
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
  console.log(`listening on PORT ${PORT}`);
});