//Imports
const { Router } = require('express');
const User = require('../model/User');

const router = Router();

//Set the login route
router.post('/login', async (req, res) => {
    try {
        //find the user
        const user = await User.findOne({email: req.body.email});

        //check if the user exists
        if (!user) throw Error('User not found');

        //check if the password is correct
        if (!user.checkPassword(req.body.password)) throw Error('Incorrect password');

        //if everything is OK, return user
        res.status(200).json(user);
    } catch (err) {
        //if there is an error, return the error
        console.log(err)
        res.status(400).json({ message: err.message });
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
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;