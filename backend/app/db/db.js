const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/todo'
const initDb = () => mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
module.exports = initDb;