const app = require('./app.js');
const mongoose = require('mongoose');

//importing and confugring the .env file
require('dotenv').config();

//monogdb connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Database is connected.`);
});


app.listen(process.env.PORT, ()=>{
    console.log(`Server start on port ${process.env.PORT}`);
})