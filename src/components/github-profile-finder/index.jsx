import React, { useEffect, useState } from "react";
import User from "./user";

const GithubProfile = () => {
  const [username, setusername] = useState("Uditjain193");
  const [userdata, setuserdata] = useState(null);
  const [loading, setloading] = useState(true);
  async function fetchgithubuserdata() {
    setloading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data) {
      setuserdata(data);
      setloading(false);
      setusername("");
    }
  }
  function handlesubmit() {
    fetchgithubuserdata();
  }
  useEffect(() => {
    fetchgithubuserdata();
  }, []);
  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <button onClick={handlesubmit}>Search</button>
      </div>
      {userdata !== null ? <User user={userdata} /> : null}
    </div>
  );
};

export default GithubProfile;
