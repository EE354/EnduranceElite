//Imports
const { Router } = require('express');
const User = require('../model/User');
const uuid = require('uuid');
const nodeCache = require('node-cache');

const router = Router();

const sessionCache = new nodeCache({stdTTL: 100, checkperiod: 120});

const createSessionCookie = (res, userId) => {
    const sessionToken = uuid.v4();

    const now = new Date();
    const expiresAt = new Date(Date.now() + (1000 * 60 * 2));

    sessionCache.set(sessionToken, {userId: userId, expiresAt: expiresAt});
    res.cookie('sessionToken', sessionToken, {secure: true, sameSite: "lax", expires: expiresAt});
};

const checkSessionCookie = (req) => {
    //Check if there is a session cookie
    if (!req.cookies) throw Error('No cookies found');

    //Check if there is a session token
    if (!req.cookies['sessionToken']) throw Error('No session token found');

    const sessionToken = req.cookies['sessionToken'];

    //Check if the session token is in the cache
    if (!sessionCache.has(sessionToken)) throw Error('Session token not found');

    const session = sessionCache.get(sessionToken);

    //Check if the session has expired
    if (session.expiresAt < new Date()) {
        sessionCache.del(sessionToken);
        throw Error('Session expired');
    }

    return {session, sessionToken};
};

//Set the login route
router.post('/login', async (req, res) => {
    try {
        //find the user
        const user = await User.findOne({email: req.body.email});

        //check if the user exists
        if (!user) throw Error('User not found');

        //check if the password is correct
        if (!user.checkPassword(req.body.password)) throw Error('Incorrect password');

        //Create a new session and store it in the cache
        createSessionCookie(res, user._id);

        //if everything is OK, remove the password and return user
        user.password = undefined;
        res.status(200).json(user);
    } catch (err) {
        //if there is an error, return the error
        console.log(err)
        res.status(401).json({ message: err.message });
    }
});

router.post('/register', async (req, res) => {
    try {
        //Get the user input
        const {email, password, first, last} = req.body;

        //check if the user already exists
        if (await User.findOne({email: email}) != null) throw Error('Email already in use');

        //Create a new user
        const newUser = new User();

        //Set the user input to the user model
        newUser.name.first = first;
        newUser.name.last = last;
        newUser.email = email;
        newUser.setPassword(password);

        //Save the user
        const user = await newUser.save();

        //Check if the user was saved
        if (!user) throw Error('Something went wrong saving the user');

        //If everything is OK, return the user
        res.status(201).json(user);
    }catch (err) {
        //If there is an error, return the error
        console.log(err)
        res.status(401).json({ message: err.message });
    }
});



router.get('/refresh', async (req, res) => {
    try {
        //Check if the session cookie is valid
        const {session, sessionToken} = checkSessionCookie(req);

        //Delete the old session
        sessionCache.del(sessionToken);

        //get the user
        const user = await User.findById(session.userId);
        user.password = undefined;

        //Create a new session
        createSessionCookie(res, session.userId);
        res.status(200).json(user);
    } catch (err) {
        console.log(err)
        res.status(401).json({ message: err.message });
    }
});

router.get('/logout', async (req, res) => {
    try {
        //Check if there are any cookies
        if (!req.cookies) throw Error('No cookies found');

        //Check if there is a session token cookie
        const sessionToken = req.cookies['session_token']
        if (!sessionToken) throw Error('No session token found');

        //Delete the session and clear the cookie
        sessionCache.del(sessionToken);
        res.clearCookie('session_token');
        res.end();
    } catch (err) {
        console.log(err)
        res.status(401).json({ message: err.message });
    }

});

router.post('/addDepandant', async (req, res) => {
    const {parentId, firstName, lastName, age } = req.body;

    const parent = await User.findById(parentId);

    parent.addDependant(firstName, lastName, age);
    res.status(200).json(parent);
});

module.exports = router;