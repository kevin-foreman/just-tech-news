const express = require('express');
// Could this handle lines 1 and 9 simultaneously? 'const app = require('express')(); It can, but in the case where you need some middleware to handle JSON (almost always), you need to structure it like we have here

const routes = require('./routes');

const sequelize = require('./config/connection');


const app = express();

const PORT = process.env.PORT || 3001;


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {

    app.listen(PORT, () => console.log('Now listening'));

});