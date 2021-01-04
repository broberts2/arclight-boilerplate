const { exec } = require("child_process");

module.exports = (app, pretext) => {
  app.post(`/gitUpdate`, async (req, res) => {
    exec("/opt/merge.sh");
    res.json("success");
    //
  });
};
