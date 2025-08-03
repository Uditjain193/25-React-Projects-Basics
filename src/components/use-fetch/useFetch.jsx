import React, { useEffect, useState } from "react";

const useFetchHook = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  async function fetchdata() {
    setloading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setdata(result);
      seterror(null);
      setloading(false);
    } catch (e) {
      setloading(false);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [url]);
  return { data, error, loading };
};

export default useFetchHook;
