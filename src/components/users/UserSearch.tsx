import React, { useContext, useState } from "react";
import { AlertContext } from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";

export const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, fetchUser, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target?.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text && setAlert) {
      return setAlert("Enter some text", "user");
    }

    if (fetchUser) {
      fetchUser(text);
      setText("");
    }
  };

  const handleClear = () => {
    if (clearUsers) {
      clearUsers();
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />

              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
