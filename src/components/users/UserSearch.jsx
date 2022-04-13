import React from "react";

function UserSearch() {
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <form>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
            />
            <div className="absolute top-0 right-0 ">
              <button className="btn btn-ghost btn-lg  w-36 shadow-md bg-gray-800 rounded-l-none">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSearch;
