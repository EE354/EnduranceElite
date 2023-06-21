//Imports
const { Router } = require('express');
const User = require('../model/User');
const uuid = require('uuid');
const nodeCache = require('node-cache');
const nodemailer = require("nodemailer")
const fs = require("fs");
const crypto = require("crypto");
const {clientDomain} = require("../config");

//Nodemailer code

//
const verifyCache = new nodeCache({stdTTL: 900, checkperiod: 600});

    //Creating the email connection
    let transporter
    const verifyhtml = fs.readFileSync('./util/verificationEmail.html').toString();

    //Set up nodemailer
(async () => {
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "enduranceelitetestemail@gmail.com",
            pass: "cnwupgvyqewjfshi"
        },
    });

})();

//Email the client with the verify page
const sendVerifyEmail = async (user, cacheId) => {
    try {
        let htmlMessage = verifyhtml
        htmlMessage = htmlMessage.replace("{name}", user.name.first);
        htmlMessage = htmlMessage.replace("{cacheId}", cacheId)

        return await transporter.sendMail({
            from: '"no-reply" <enduranceelitetestemail@gmail.com>', // sender address
            to: user.email,
            subject: "Please verify your email address", // Subject line
            html: htmlMessage //formatted html
        });
    } catch (e) {

    }



}

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
        const {email, password, first, last, dateOfBirth, role} = req.body;

        //check if the user already exists
        if (await User.findOne({email: email}) != null) throw Error('Email already in use');

        //Create a new user
        const newUser = new User();

        //Set the user input to the user model
        newUser.name.first = first;
        newUser.name.last = last;
        newUser.email = email;
        newUser.dateOfBirth = dateOfBirth;
        if (role) newUser.role = role;
        newUser.setPassword(password);

        //Save the user
        const user = await newUser.save();

        //Check if the user was saved
        if (!user) throw Error('Something went wrong saving the user');

        user.password = undefined;


        let cacheId = crypto.randomBytes(20).toString('hex');

        verifyCache.set(cacheId, user._id);
        console.log(verifyCache.has(cacheId))
        console.log(verifyCache.keys())

        //send verify
        await sendVerifyEmail(user, cacheId)

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
        res.end();
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

router.post('/addDependant', async (req, res) => {
    const {parentId, firstName, lastName, age } = req.body;

    const parent = await User.findById(parentId);

    parent.addDependant(firstName, lastName, age);
    res.status(200).json(parent);
});

router.get('/verify/:cacheId', async (req, res) => {
   try {
       const { cacheId } = req.params;
       console.log(cacheId)
       console.log(verifyCache.keys())

        const user = await User.findById(verifyCache.get(cacheId));

        user.verified = true;
        user.password = undefined;

        verifyCache.del(cacheId);
        res.status(200).json(user);
   } catch (e) {
       console.log(e)
       res.status(401).json({ message: e.message });
       //res.redirect()
   }
});

module.exports = router;