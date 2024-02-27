let express = require('express')
let app = express()
let userRoute = require('./routes/userRoute')
let adminRoute = require('./routes/adminRoute')



let CORS = require('cors')
let dotenv = require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'));
app.use(CORS({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
}))
app.listen(process.env.PORT, () => {
    console.log(`server runnig http://localhost:${process.env.PORT}`);
})
app.use('/admin', adminRoute)
app.use('/user', userRoute)
app.get('/', (req, res) => {
    res.json({ success: true, message: "hello world" })
})