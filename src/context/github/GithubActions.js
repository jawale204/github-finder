import axios from "axios";

const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

//only for testing purpose
export const SearchUsers = async (text) => {
  const param = new URLSearchParams({
    q: text,
  });
  const res = await github.get(`/search/users?${param}`);

  return res.data.items;
};

//get User
export const getUserAndRepos = async (login) => {
  const param = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${param}`),
  ]);

  if (user.status === 404 || repos.status === 404) {
    window.location.href = "404/notfound";
  } else {
    return { user: user.data, repos: repos.data };
  }
};
