const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Card {
    _id: ID
    uid: Int
    pair_id: Int
    content: String
    stat: String
    topic: String
  }
    type Query {
        cards: Card
        class(id: ID!): Card
      }`;


  module.exports = typeDefs;