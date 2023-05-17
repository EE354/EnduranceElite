//Import routes
const user = require('./Users.js');

//Set routes
exports.setRoutes = (app) => {
    app.use('/api/user', user);
}