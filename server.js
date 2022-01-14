const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});






//https://ancient-spire-12599.herokuapp.com/api/animals

//http://localhost:3001/api/animals?name=Erica
//http://localhost:3001/api/animals
//http://localhost:3001/api/animals?personalityTraits=hungry