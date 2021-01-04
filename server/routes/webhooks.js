const shell = require("shelljs");

module.exports = (app, pretext) => {
  app.post(`/gitUpdate`, async (req, res) => {
    shell.exec("../../merge.sh");
    res.json("success");
  });
};
