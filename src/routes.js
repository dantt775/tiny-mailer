var mail = require('./mail');

var appRouter = function (app) {
    app.get("/mail/:contact/:body", function (req, res) {
      var data = {
        contact: req.params.contact,
        body: req.params.body
      }
      res.status(200);
      console.log(data.name);
      mail(data);
  
    });
  }

  
  module.exports = appRouter;