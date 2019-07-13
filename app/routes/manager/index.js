const db = require("../../models");
const { Partner, Product, Employee, Customer, Provider, Request, Order } = db;
const routesManager = require('express').Router();

routesManager.get('/manager/employee', (req, res) => {
    res.render("manager/employee",{layout: 'layout-manager'});
});

routesManager.get('/manager/customer', (req, res) => {
    res.render("manager/customer",{
        layout: 'layout-manager', title:"CUSTOMER"
    });
});

routesManager.get('/manager/test', (req, res) => {
  res.status(200).json({ message: 'manager!' });
});

routesManager.post('/charge', (req, res) => {
    const amount = 14.99;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
        amount,
        description: 'SnatchYourWig',
        currency: 'usd',
        customer: customer.id
    }))
    .then(charge => res.render('success'));
});

routesManager.delete("/api/burgers/:id", function (req, res) {
    var promiseArr = [];
    console.log("delete route hit");

    promiseArr.push(Burger.destroy({
        where:
        {
            id: req.params.id
        }
    }));

    promiseArr.push(db.Customer.destroy({
        where: {
            id: req.params.id
        }
    }));

    Promise.all(promiseArr).then(() => {
        console.log("Promose array was followed");
        res.status(200).end();
    });

});

routesManager.put("/api/burger/:id", function (req, res) {
    var promiseArr = [];
    console.log("put route hit");

    promiseArr.push(Burger.update({
        devoured: req.body.devoured,
    }, { where: { id: req.params.id } }));

    promiseArr.push(Customer.update({
        name: req.body.customerName
    }, { where: { id: req.body.id } }))

    Promise.all(promiseArr).then(() => {
        console.log("Promose array was followed");
        res.status(200).end();
    })
});

module.exports = routesManager;