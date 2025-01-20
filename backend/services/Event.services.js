const Event = require('../models/Event.models');

const createEvent = async (eventData) => {
    try{
        const newEvent = new Event(eventData);
        return await newEvent.save();
    }
    catch(error){
        console.error("Error in create eveny service",error);
        throw new Error("could not create event");
    }
}

const getEvent = async () => {
    try{
        return await Event.find().populate('createdBy','username email').populate('attendees','username email');
    }
    catch(error){
        console.error("Error in getEvents service:", error);
        throw new Error("Could not fetch events");
    }
}

module.exports = {
    createEvent,
    getEvent
}