const db = require("../../models");
const { Partner, Product, Employee, Customer, Provider, Request, Order } = db;
const routesManager = require('express').Router();

routesManager.get('/employee', (req, res) => {
    // res.render("manager/employee",{layout: 'layout-manager'});
    res.render("manager/employee");
});

routesManager.get('/customer', (req, res) => {
    res.render("manager/customer",{
        layout: 'layout-manager', title:"CUSTOMER"
    });
});

routesManager.get('/test', (req, res) => {
  res.status(200).json({ message: 'manager!' });
});

routesManager.post('/update-customer', (req, res) => {
    const {customerId, inputOrder, dateOrder} = req.body;
    Customer.update({customerOrder: inputOrder, customerOrderDate: dateOrder}, {where: {customerID: customerId}}).then(customer => {
        res.render("manager/customer",{
            layout: 'layout-manager', title:"CUSTOMER"
        });
    }).catch(err => res.send(err));
});

module.exports = routesManager;