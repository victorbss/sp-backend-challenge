'use strict';

module.exports = function(app) {

 const users = require('../controllers/userController');

 // users Routes

 app.route('/api/users')
   .get(users.list_users)

 app.route('/api/users/:username/details')
   .get(users.user_details)
 
 app.route('/api/users/:username/repos')
   .get(users.user_repos)

};
