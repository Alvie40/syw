const routesSite = require('express').Router();
const ytlist = require('youtube-playlist');
const playListUrl = 'https://www.youtube.com/watch?v=mR17HyaAqjU&list=PLqxeWGIeCYE56HBO8llMUiqCcO5KTUT2o';

const db = require("../../models");
const { Partner, Product, Employee, Customer, Provider, Request, Order } = db;

routesSite.get('/site', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routesSite.get("/about",function (req, res) {
    res.render("about",{});
});

routesSite.get("/video",function (req, res) {
    ytlist(playListUrl, 'url').then(resp => {
        res.render("video", {videos: resp.data.playlist.map(v => ({url: `https://www.youtube.com/embed/${v.split('=')[1]}`}))});
    });
});

routesSite.get("/blog",function (req, res) {
    res.render("blog");
});

routesSite.get("/donation",function (req, res) {
    res.render("donation");
});


routesSite.get("/contact",function (req, res) {
    res.render("contact");
});

routesSite.get("/", function (req, res) {
    res.render("index");
});

module.exports = routesSite;