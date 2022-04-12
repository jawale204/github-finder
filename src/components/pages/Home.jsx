import React from "react";
import { GithubProvider } from "../../context/github/GithubContext";
import UserResults from "../users/UserResults";

function Home() {
  return (
    <div>
      <h1>
        <GithubProvider>
          <UserResults />
        </GithubProvider>
      </h1>
    </div>
  );
}

export default Home;
