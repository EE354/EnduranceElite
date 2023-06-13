//Import routes
const user = require('./Users.js');
const calendar = require('./Calendar.js');
const groups = require('./Groups.js');

//Set routes
exports.setRoutes = (app) => {
    app.use('/api/user', user);
    app.use('/api/calendar', calendar);
    app.use('/api/groups', groups);
}