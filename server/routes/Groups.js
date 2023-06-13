const { Router } = require('express');
const Group = require('../model/Group');
const User = require('../model/User');

const router = Router();

//Create a new Group
router.post('/newGroup', async (req, res) => {
    try {
        //Get the data from the request
        const { name, description, maxAge, minAge, capacity } = req.body;

        //Create a new group
        const newGroup = new Group();

        //Set the properties of the new group
        newGroup.name = name;
        newGroup.description = description;
        newGroup.age.maxAge = maxAge;
        newGroup.age.minAge = minAge;
        newGroup.capacity = capacity;

        //Save the group
        const group = await newGroup.save();
        if (!group) throw Error('Something went wrong saving the group');

        //Return the group
        res.status(200).json(group);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

//Add a user to a group
router.put('/addUser', async (req, res) => {
   try {
       //Get the data from the request
       const { groupId, userId } = req.body;

       //Check if the group exists
       const group = await Group.findById(groupId);
       if (!group) throw Error('Group does not exist');

       //Get the user object
       const user = await User.findById(userId);
       if (!user) throw Error('User does not exist');

       //Check if the user is already in the group
       if (user.groups.includes(groupId)) throw Error('User already in the group');

       //Check if the group is full
       if (User.find({groups: groupId}).length >= group.capacity) throw Error('Group is full');

       //Check if the user is the right age, ignore if age is -1
       const age = user.getAge();
       if (user.role === 0) {
           if (age < group.age.minAge) throw Error('User is too young for this group');
           if (age > group.age.maxAge) throw Error('User is too old for this group');
       }

       //Add the group to the user
       const userGroups = user.groups;
       userGroups.push(groupId);
       user.groups = userGroups;

       //Save the user
       const updatedUser = await user.save();
       if (!updatedUser) throw Error('Something went wrong saving the user');

       //Return the user
       res.status(200).json(updatedUser);
   } catch (e) {
       res.status(400).json({ msg: e.message });
   }
});

//Update a group
router.patch('/updateGroup', async (req, res) => {
   try {
       //Get the data from the request
       const {groupId, name, description, maxAge, minAge, capacity} = req.body;

       //Check if the group exists
       const group = Group.findById(groupId);
       if (!group) throw Error('Group does not exist');

       //Update the group properties
       group.name = name;
       group.description = description;
       group.age.maxAge = maxAge;
       group.age.minAge = minAge;
       group.capacity = capacity;

       //Save the group
       const updatedGroup = await group.save();
       if (!updatedGroup) throw Error('Something went wrong saving the group');

       //return the group
       res.status(200).json(updatedGroup);
   } catch (e) {
       res.status(400).json({ msg: e.message });
   }
});

//Remove a user from a group
router.delete('/removeUser', async (req, res) => {
    try {
        //Get the data from the request
        const {groupId, userId} = req.body;

        //Get the group object
        const group = await Group.findById(groupId);
        if (!group) throw Error('Group does not exist');

        //Get the user object
        const user = await User.findById(userId);
        if (!user) throw Error('User does not exist');

        //Check if the user is in the group
        if (!user.groups.includes(groupId)) throw Error('User is not in the group');

        //Remove the selected group from the user
        let userGroups = user.groups;
        userGroups = userGroups.filter(group => group !== groupId);
        user.groups = userGroups;

        //Save the user
        const updatedUser = await user.save();
        if (!updatedUser) throw Error('Something went wrong saving the user');

        //Return the user
        res.status(200).json(updatedUser);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

//Get all the groups
router.get('/', async (req, res) => {
    try {
        //Get all the groups
        const groups = await Group.find();
        if (!groups) throw Error('No groups found');

        //Return the groups
        res.status(200).json(groups);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

//Get users enrolled in a group
router.get('/getUsersInGroup', async (req, res) => {
    try {
        const { groupId } = req.body;

        const users = await User.find({groups: groupId});
        if (!users) throw Error('No users found');

        res.status(200).json(users);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }

});

//Get a group by id
router.get('/getGroupById', async (req, res) => {
   try {
       //Get the data from the request
       const { groupId } = req.body;

       //Check if the group exists
       const group = await Group.findById(groupId);
       if (!group) throw Error('Group does not exist');

       //Return the group
       res.status(200).json(group);
   } catch (e) {
       res.status(400).json({ msg: e.message });
   }
});

//Get all the groups a user is enrolled in
router.post('/getGroupsByUser', async (req, res) => {
   try {
    const { userId } = req.body;

   const user = await User.findById(userId);
    if (!user) throw Error('User does not exist');

    const groupIds = user.groups;
    const groups = [];
    for (let groupId of groupIds) {
        groups.push(await Group.findById(groupId));
    }
    if (!groups) throw Error('No groups found');

    res.status(200).json(groups);
   } catch (e) {
       res.status(400).json({ msg: e.message });
   }
});

//Delete a group
router.delete('/deleteGroup', async (req, res) => {
    try {
        const {groupId} = req.body;

        const group = await Group.findById(groupId);
        if (!group) throw Error('Group does not exist');

        //remove the group from all users
        const users = await User.find({groups: groupId});
        for (let user of users) {
            let userGroups = user.groups;
            userGroups = userGroups.filter(group => group !== groupId);
            user.groups = userGroups;
            await user.save();
        }

        //remove the group
        await Group.findByIdAndDelete(groupId);

        //return a message
        res.status(200).json({msg: 'Group deleted'});
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});


module.exports = router;