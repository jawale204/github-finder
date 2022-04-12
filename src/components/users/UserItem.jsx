import React from "react";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div>
      <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className="avatar">
              <div className="rounded-full w-14 h-14">
                <img src={avatar_url} alt="profile"></img>
              </div>
            </div>
          </div>
          <div>
            <h1 className="card-title mx-3 p-1">{login}</h1>
            <Link
              className="text-base-content text-opacity-40 mx-3 p-1"
              to={`/user/${login}`}
            >
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
