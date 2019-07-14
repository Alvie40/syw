const Router = require("express").Router(); 

// Site
const RouterSite = require("./site");
Router.route("/about").get(RouterSite);
Router.route("/blog").get(RouterSite);
Router.route("/donation").get(RouterSite);
Router.route("/video").get(RouterSite);
Router.route("/crud").get(RouterSite);
Router.route("/contact").get(RouterSite);
Router.route("/").get(RouterSite);

// Manager
Router.use("/manager", require("./manager"));

// API
Router.route("/api/*").post(require("./api"));

module.exports = Router;