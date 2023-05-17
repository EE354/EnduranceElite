const { Router } = require('express');
const { Date } = require('mongoose');
const Event = require('../model/Event');

const router = Router();

router.post( '/newEvent', async (req, res) => {
   const { name, description, startDate, endDate, location} = req.body;

   const newEvent = new Event();

   newEvent.dateTime.startDate = startDate;
   newEvent.dateTime.endDate = endDate;
   newEvent.name = name;
   newEvent.description = description;
   newEvent.location = location;

    const event = await newEvent.save();

    if (!event) throw Error('Something went wrong saving the event');

   res.status(200).json(event);
});

module.exports = router;