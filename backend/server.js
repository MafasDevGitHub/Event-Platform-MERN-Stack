const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes/Index.routes')
const eventRoutes = require('./routes/Event.routes')


app.use(express.json());

app.use("/api",routes);
app.use("/api/events", eventRoutes);

const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.crybx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("DB Connection Successfully")
    })
    .catch((error) => {
        console.log("DB Connection Error",error)
    });

const PORT = process.env.SERVER_PORT

app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
})




