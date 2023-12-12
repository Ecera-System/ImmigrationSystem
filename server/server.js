const app = require('./app.js');


//importing and confugring the .env file
require('dotenv').config();



app.listen(process.env.PORT, ()=>{
    console.log(`Server start on port ${process.env.PORT}`);
})