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

module.exports = {
    createEvent
}