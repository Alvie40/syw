const express = require("express");
const exphbs = require("express-handlebars");
const stripe = require('stripe')('sk_test_nhg1xRWcHeYcr8i0euL3wdk900JsmB6rfD');

const app = express();
const PORT = process.env.PORT || 8088;
// const keys = require('./config/keys');
const db = require("./app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/app/public`));

app.post('/charge', (req, res) => {
  console.log('heyyyy===>>', req.body);
  const amount = 1515;
  stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
  })
  .then(customer => {
    console.log('customerrrrr===>>', customer);
    stripe.charges.create({
      amount,
      description: 'SnatchYourWig',
      currency: 'usd',
      customer: customer.id
  })
}).then(charge => {
    console.log('payment successful===>>', charge);
    res.render('donation');
  }).catch(err => {
    console.log('err making payments', err);
    res.send(err)
  });
});

app.use('/', require('./app/routes'));
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
