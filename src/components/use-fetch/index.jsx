import React from "react";
import useFetchHook from "./useFetch";
import { HiH3 } from "react-icons/hi2";

const UseFetch = () => {
  const { data, error, loading } = useFetchHook(
    "https://dummyjson.com/products"
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading ? <h3>Loading ! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p>{item.title}</p>)
        : null}
    </div>
  );
};

export default UseFetch;
