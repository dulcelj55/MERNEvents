const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
require('dotenv').config();
require('./config/db.js')
const Event = require('./Models/Event.js')
const PORT= 3000;





const app= express()

// Start of Middleware
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use(morgan('dev'));
app.use(helmet())
// End of middleware


// Start Routes
app.get("/events", async(req,res)=>{
    let arrayOfEvents= await Event.find()
    res.send(arrayOfEvents) 

})

app.post("/events", async(req,res)=>{
    // 1. get the data that was sent from the frontend
    // let eventData= req.body.eventData;
   
    // 2. model.create(eventData)
    try{
        let response = await Event.create(req.body)
        res.status(201).send("create a new event!")
    } catch (err ){
        res.send("ERROR ")
    }
    })

app.delete("/events/idOfEvent", async (req, res)=>{
let id= req.params.idOfEvent
    let response = await Event.findByIdAndDelete(id)
    console.log(response)
    res.send('deleted event!')
})

app.listen(PORT,()=>{
    console.log(`Server LIVE on port ${PORT}`)
})