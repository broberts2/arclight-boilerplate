const shell = require("shelljs");

module.exports = (app, pretext) => {
  app.post(`/gitUpdate`, async (req, res) => {
    console.log(req.body);
    // shell.exec("../../merge.sh");
  });
};
