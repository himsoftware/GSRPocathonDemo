const express = require('express')
const { graphql, buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const User = require('./user')

const schema = buildSchema(`
  type Query {
    language: String
    getUsers: [User]
  }

  type Mutation {
    updateUserName(name: String!, age: Int): User
  }

  type User {
    name: String,
    age: Int
  }
`)

const users = [
  new User('Rosy Daughtry', 20),
  new User('Ruby Meshell', 30),
  new User('Chau Catlett', 40),
  new User('Cassondra Kuebler', 50),
  new User('Angela Cosper', 30),
  new User('Hertha Vandiver', 30)
]

const rootValue = {
  language: () => 'GraphQL',

  getUsers: () => users
}

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
  rootValue, schema, graphiql: true
}))

app.listen(4000, () => console.log('Listening on 4000'))