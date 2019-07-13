const db = require("../../models");
const { Partner, Product, Employee, Customer, Provider, Request, Order } = db;
const routesSite = require('express').Router();

routesSite.get('/site', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routesSite.get("/about",function (req, res) {
    res.render("about",{});
});

routesSite.get("/blog",function (req, res) {
    res.render("blog");
});

routesSite.get("/donation",function (req, res) {
    res.render("donation");
});

routesSite.get("/donation2",function (req, res) {
    res.render("donation", {layout: "layout-green" });
});

routesSite.get("/contact",function (req, res) {
    res.render("contact");
});

routesSite.get("/", function (req, res) {
    res.render("index");
});

module.exports = routesSite;