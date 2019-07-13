const db = require("../../models");
const { Employee } = db;

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const routesEmployee = require('express').Router();

routesEmployee.post('/api/employee/add', async (req, res) => {
  const employee = await Employee.create(req.body);
  res.status(200).json(employee);
});

routesEmployee.post('/api/employee/get', async (req, res) => {
  const employee = await Employee.findByPk(req.body.employeeID);
  res.status(200).json(employee);
});

routesEmployee.post('/api/employee/alt', async (req, res) => {
  const employee = await Employee.update(req.body, { where: { employeeID: req.body.employeeID } });
  res.status(200).json(employee);
});

routesEmployee.post('/api/employee/list', async (req, res) => {
  const employee = await Employee.findAndCountAll({
    where: {
      employeeFirstName: {[Op.like]: req.body.employeeFirstName+'%' }
    },
    offset: parseInt(req.body.indexPage),
    limit: parseInt(req.body.rowPerPage)
 });
  res.status(200).json(employee);
});



module.exports = routesEmployee;