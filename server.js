const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
// const keys = require('./config/keys');
const stripe = require('stripe')('sk_test_nhg1xRWcHeYcr8i0euL3wdk900JsmB6rfD');

const db = require("./app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/app/public`));
app.use('/', require('./app/routes'));



const exphbs = require("express-handlebars");
app.set("view engine", "hbs");
app.set('views', __dirname + '/app/views/pages');
app.engine("hbs", exphbs({  
  extname: '.hbs',
  defaultLayout: "default",
  defaultView: 'default',
  layoutsDir: __dirname + '/app/views/layouts/',
  partialsDir: __dirname + '/app/views/partials/'
}));










db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
