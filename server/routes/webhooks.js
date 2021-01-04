const { exec } = require("child_process");

module.exports = (app, pretext) => {
  app.post(`/gitUpdate`, async (req, res) => {
    exec("echo running merge");
    res.json("success"); //
  });
};
