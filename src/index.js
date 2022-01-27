const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const init = async () => {
  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
};

init();
