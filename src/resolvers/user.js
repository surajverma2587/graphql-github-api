const axios = require("axios");

const user = async (parent, { username }, context, info) => {
  const url = `https://api.github.com/users/${username}`;

  const { data } = await axios.get(url);

  return {
    username: data.login,
    id: data.id,
    profileImageUrl: data.avatar_url,
    profileUrl: data.html_url,
    following: [
      {
        username: "AkenEagle",
        id: 19980311,
        profileImageUrl: "https://avatars.githubusercontent.com/u/19980311?v=4",
        profileUrl: "https://github.com/AkenEagle",
        followers: [],
        repos: [],
      },
      {
        username: "AkenEagle",
        id: 19980311,
        profileImageUrl: "https://avatars.githubusercontent.com/u/19980311?v=4",
        profileUrl: "https://github.com/AkenEagle",
        followers: [],
        repos: [],
      },
      {
        username: "AkenEagle",
        id: 19980311,
        profileImageUrl: "https://avatars.githubusercontent.com/u/19980311?v=4",
        profileUrl: "https://github.com/AkenEagle",
        followers: [],
        repos: [],
      },
    ],
    repos: [
      {
        id: 430829236,
        name: "avengers-cli",
        private: false,
        owner: {
          username: "AkenEagle",
          id: 19980311,
          profileImageUrl:
            "https://avatars.githubusercontent.com/u/19980311?v=4",
          profileUrl: "https://github.com/AkenEagle",
          followers: [],
          repos: [],
        },
        profileUrl: "https://github.com/surajverma2587/avengers-cli",
        description: null,
        createdAt: "2021-11-22T18:54:03Z",
        updatedAt: "2021-11-22T20:41:43Z",
        pushedAt: "2021-11-22T20:41:40Z",
        language: "JavaScript",
        openIssuesCount: 0,
        license: null,
      },
      {
        id: 430829236,
        name: "avengers-cli",
        private: false,
        owner: {
          username: "AkenEagle",
          id: 19980311,
          profileImageUrl:
            "https://avatars.githubusercontent.com/u/19980311?v=4",
          profileUrl: "https://github.com/AkenEagle",
          followers: [],
          repos: [],
        },
        profileUrl: "https://github.com/surajverma2587/avengers-cli",
        description: null,
        createdAt: "2021-11-22T18:54:03Z",
        updatedAt: "2021-11-22T20:41:43Z",
        pushedAt: "2021-11-22T20:41:40Z",
        language: "JavaScript",
        openIssuesCount: 0,
        license: null,
      },
    ],
    name: data.name,
    company: data.company,
    blog: data.blog,
    location: data.location,
    email: data.email,
    bio: data.bio,
    twitter_username: data.twitter_username,
    numberOfPublicRepos: data.public_repos,
    numberOfFollowers: data.followers,
    numberOfFollowing: data.following,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
};

module.exports = user;
