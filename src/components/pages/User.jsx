import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layouts/Spinner";

function User() {
  const { user, getUser, isLoading } = useContext(GithubContext);
  const param = useParams();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(param.login);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-5">
          <Link to="/" className="btn btn-ghost">
            back to search
          </Link>
        </div>
        <grid className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8 mb-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lgshadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="not found" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <h2>{login}</h2>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className=" text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit github profile
                </a>
              </div>
            </div>
          </div>
        </grid>
      </div>
    </>
  );
}

export default User;
