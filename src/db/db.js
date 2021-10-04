const mongoose = require('mongoose');


//need to install mongoose using npm install mongoose

const dbURL = process.env.DB_URI;
if (!dbURL) {
  console.error('Mongo URL not set in env file or config.js');
  return new Error('Mongo URL not set in env file or config.js');
}
mongoose.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.error(`FAILED to connect using mongoose. ${error}`);
    } else {
      console.info(`Connected to DB server. ( ${dbURL} )`);
    }
  }
);

module.exports = mongoose;
