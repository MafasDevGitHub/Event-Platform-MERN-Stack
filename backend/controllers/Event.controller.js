const { createEvent } = require('../services/Event.services');

const handleCreateEvent = async (req,res) => {
    try{
        const {title, description, date, location} = req.body;
        const createdBy = req.user.id;
        const event = await createEvent({title, description, date, location, createdBy});
        res.status(201).json({message:"Event created successfully", event});
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    handleCreateEvent
}