//only for testing purpose
export const SearchUsers = async (text) => {
  const param = new URLSearchParams({
    q: text,
  });
  const res = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/search/users?${param}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    }
  );

  const { items } = await res.json();

  return items;
};

//get User
export const getUser = async (login) => {
  const res = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    }
  );
  if (res.status === 404) {
    window.location.href = "404/notfound";
  } else {
    const data = await res.json();

    return data;
  }
};

//repo search
export const SearchUsersRepo = async (login) => {
  const param = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const res = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${param}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await res.json();

  return data;
};
