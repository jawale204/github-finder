import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";

function User() {
  const { user, getUser } = useContext(GithubContext);
  const param = useParams();
  useEffect(() => {
    getUser(param.login);
  }, []);

  return <div>{user.login}</div>;
}

export default User;
