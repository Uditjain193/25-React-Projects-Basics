import React, { useEffect, useState } from "react";
import Suggestion from "./suggestions";

const AutoComplete = () => {
  const [loading, setloading] = useState(false);
  const [users, setuser] = useState([]);
  const [error, seterror] = useState(null);
  const [searchparam, setsearchparams] = useState("");
  const [showdropdown, setdropdown] = useState(false);
  const [filtereduser, setfiltereduser] = useState([]);
  function handlechange(e) {
    const query = e.target.value.toLowerCase();
    setsearchparams(query);
    if (query.length > 1) {
      const filtereddata = users.filter(
        (item) => item.toLowerCase().indexOf(query) > -1
      );
      setfiltereduser(filtereddata);
      setdropdown(true);
    } else {
      setdropdown(false);
    }
  }
  function handleclick(e) {
    setdropdown(false);
    setsearchparams(e.target.innerText);
    setfiltereduser([]);
  }
  async function fetchlistofuser() {
    try {
      setloading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setuser(data.users.map((item) => item.firstName));
        setloading(false);
        seterror(error);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
      seterror(error);
    }
  }
  useEffect(() => {
    fetchlistofuser();
  }, []);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <input
          type="text"
          value={searchparam}
          placeholder="Search Users here..."
          onChange={handlechange}
        />
      )}
      {showdropdown && (
        <Suggestion handleclick={handleclick} data={filtereduser} />
      )}
    </div>
  );
};

export default AutoComplete;
