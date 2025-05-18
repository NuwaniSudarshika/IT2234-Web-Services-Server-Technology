const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose')
const coursert = require('./routes/CourseRoute')

app.use(express.json())
app.use('/course',coursert)
mongoose.connect('mongodb://localhost:27017/').then(()=>{
    console.log('Database connects');
}).catch((error)=>{
    console.error(error);
}
)

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})