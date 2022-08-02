const express = require('express');
const HTMLroutes = require('./routes/index.js');
const APIroutes = require('./routes/api.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use('/', HTMLroutes);
app.use('/api', APIroutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  