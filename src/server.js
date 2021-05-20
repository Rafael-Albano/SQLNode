require('dotenv').config();
require('./database');

const app = require('./config/configExpress')();

const port = process.env.APP_PORT;


app.listen(port, (error) => {
  if(error){
    console.log("Error listen Server: " + error);
  }

  console.log(`Server Listen port: ${port}`);
})