const { gql } = require("apollo-server");

// Query 1: get user info query (requires username)
// Query 2: get repos of user (requires username)
// Query 3: get followers of user (requires username)
// Query 4: get following of user (requires username)
// Query 5: get repo by name for user (requires username and repo name)

const typeDefs = gql`
  type User {
    username: String
    id: ID
    profileImageUrl: String
    profileUrl: String
    followers: [User]
    following: [User]
    repos: [Repo]
    name: String
    company: String
    blog: String
    location: String
    email: String
    bio: String
    twitter_username: String
    numberOfPublicRepos: Int
    numberOfFollowers: Int
    numberOfFollowing: Int
    createdAt: String
    updatedAt: String
  }

  type Repo {
    id: ID
    name: String
    private: Boolean
    owner: User
    profileUrl: String
    description: String
    createdAt: String
    updatedAt: String
    pushedAt: String
    language: String
    openIssuesCount: Int
    license: String
  }

  type Query {
    user(username: String!): User
  }
`;

module.exports = typeDefs;
