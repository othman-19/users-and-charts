const casual = require('casual');
const mongoose = require('mongoose');
const User = require('./models/User');

const MONGO_DB = 'url';
mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const arrayOfNums = arr => arr.map(item => item * 10);

const populateDBWithDummyData = numberOfItems => {
  const docs = [...new Array(numberOfItems)].map(item => ({
    firstName: casual.first_name,
    lastName: casual.last_name,
    email: casual.email,
    password: 'password',
    userData: arrayOfNums(casual.array_of_digits(5)),
  }));

  console.log(docs);
  return User.insertMany(docs);
};

populateDBWithDummyData(10);
