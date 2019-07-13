const db = require("../../models");
const { Customer } = db;

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const routesCustomer = require('express').Router();

routesCustomer.post('/api/customer/add', async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(200).json(customer);
});

routesCustomer.post('/api/customer/get', async (req, res) => {
  const customer = await Customer.findByPk(req.body.customerID);
  res.status(200).json(customer);
});

routesCustomer.post('/api/customer/alt', async (req, res) => {
  const customer = await Customer.update(req.body, { where: { customerID: req.body.customerID } });
  res.status(200).json(customer);
});

routesCustomer.post('/api/customer/list', async (req, res) => {
  try{
    const customer = await Customer.findAndCountAll({
      where: {
        customerFirstName: {[Op.like]: req.body.customerFirstName+'%' }
      },
      offset: parseInt(req.body.indexPage),
      limit: parseInt(req.body.rowPerPage)
    });
    res.status(200).json(customer);
  }catch(e){
    console.log(e);
    res.status(200).json({error:true,msg:"error list"});
  }
});

module.exports = routesCustomer;