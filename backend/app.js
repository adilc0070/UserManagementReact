let express = require('express')
let app = express()
let CORS = require('cors')
let dotenv = require('dotenv')
dotenv.config();
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
app.use(CORS())
app.listen(process.env.PORT, () => {
    console.log(`server runnig http://localhost:${process.env.PORT}`);
})
app.get('/', (req, res) => {
    res.json({ success: "hloasdasas" })
})
