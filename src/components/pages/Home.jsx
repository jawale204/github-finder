import React from "react";

import Alert from "../layouts/Alert";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  return (
    <div>
      <h1>
        <Alert />
        <UserSearch />
        <UserResults />
      </h1>
    </div>
  );
}

export default Home;
