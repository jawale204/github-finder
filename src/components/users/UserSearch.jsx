import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { SearchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch, setLoading } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleClear = () => {
    dispatch({
      type: "CLEAR_USER_RESULTS",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter some value", "error");
    } else {
      setLoading();
      const user = await SearchUsers(text);

      dispatch({
        type: "FETCH_USERS",
        payload: user,
      });

      setText("");
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 m-1">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              value={text}
              onChange={handleChange}
            />
            <div className="absolute top-0 right-0 ">
              <button
                className="btn btn-ghost btn-lg  w-36 shadow-md bg-gray-800 rounded-l-none"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length === 0 ? (
        <></>
      ) : (
        <>
          <button
            className="btn btn-ghost bg-gray-800 mt-10 btn-lg"
            onClick={handleClear}
            type="button"
          >
            Clear
          </button>
        </>
      )}
    </div>
  );
}

export default UserSearch;
