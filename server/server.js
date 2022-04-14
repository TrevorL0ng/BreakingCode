// Import npm  Packages
const express = require('express');
<<<<<<< HEAD
const {ApolloServer, gql} = require('apollo-server-express');
const mongoose = require('mongoose');
const morgan = require('express');
=======
const {ApolloServer} = require('apollo-server-express');
>>>>>>> upstream/develop
const path = require('path');

// needed? 
require('dotenv').config();


const { typeDefs, resolvers } = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Connect to MongoDB Atlas
const MongoDB_URL = 'mongodb+srv://TrevorLong:TheBigOof992@cluster0.ywscg.mongodb.net/Cards?retryWrites=true&w=majority'

mongoose.connect(MongoDB_URL || 'mongodb://localhost/breaking_code', {
  userNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!')
});


// HTTP request logger
app.use(morgan('tiny'));


const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routes/routes'));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


// Routes
app.get('/api', (req, res) => {
  const data = {
    username: 'potato',
    age: 2
  };
  res.json(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});