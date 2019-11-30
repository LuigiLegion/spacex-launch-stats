// Imports
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const schema = require('./schema');

// Initializations
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
