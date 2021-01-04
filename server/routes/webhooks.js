const { spawn } = require("child_process");

module.exports = (app, pretext) => {
  app.post(`/gitUpdate`, async (req, res) => {
    const ls = spawn("ls");
    res.json("success"); //
  });
};
