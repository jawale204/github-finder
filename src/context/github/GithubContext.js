import { createContext, useState } from "react";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [users, setUserResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    });

    const usersData = await res.json();

    setUserResults(usersData);
    setIsLoading(false);
  };
  return (
    <GithubContext.Provider value={{ users, isLoading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
