const ROUTES = {
  webhooks: require("./routes/webhooks"),
};

module.exports = (app) => {
  for (let key in ROUTES) {
    ROUTES[key](app, key);
  }
};
