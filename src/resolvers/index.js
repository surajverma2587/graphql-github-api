const user = require("./user");
const followers = require("./followers");
const following = require("./following");

const resolvers = {
  Query: {
    user,
  },
  User: {
    followers,
    following,
  },
};

module.exports = resolvers;
