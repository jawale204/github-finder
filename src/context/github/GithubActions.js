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
