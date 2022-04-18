const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://TrevorLong:TheBigOof992@cluster0.ywscg.mongodb.net/Cards?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || 'mongodb://localhost/breakingcode_data', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!')
})


module.exports = mongoose.connection;