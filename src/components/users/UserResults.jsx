import React, { useContext, useEffect, useState } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, isLoading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

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
