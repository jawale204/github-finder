import React, { useEffect, useState } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUserResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

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
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem user={user} key={user.id} />;
        })}
      </div>
    </>
  );
}

export default UserResults;
