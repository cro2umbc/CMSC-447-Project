'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  
  router.get('/status', server.loopback.status());

  router.get('/find', function(req, res) {
    res.sendFile(__dirname + '/client/find.html');
  });

  router.get('/signup', function(req, res) {
    res.send(__dirname + '/client/signup.html');
  });

  router.get('/login', function(req, res) {
    res.send(__dirname + '/client/login.html');
  });

  server.use(router);
};
 