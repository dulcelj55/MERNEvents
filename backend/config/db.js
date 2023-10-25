// connect to DB
const mongoose= require('mongoose')

let connectionString= `mongodb+srv://dulcejaramillo:${process.env.MONGO_PASS}@cluster0.neyntat.mongodb.net/Company?retryWrites=true&w=majority`
console.log(connectionString);

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once('open', ()=>{
console.log('connected to MONGODB')
})
