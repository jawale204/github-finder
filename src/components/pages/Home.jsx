import React from "react";
import { GithubProvider } from "../../context/github/GithubContext";
import Alert from "../layouts/Alert";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  return (
    <div>
      <h1>
        <GithubProvider>
          <Alert />
          <UserSearch />
          <UserResults />
        </GithubProvider>
      </h1>
    </div>
  );
}

export default Home;
