import React, { useRef } from "react";
import useFetchHook from "../use-fetch/useFetch";

const ScrollToTopAndBottom = () => {
  const { data, error, loading } = useFetchHook(
    "https://dummyjson.com/products?limit=100"
  );
  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  if (error) {
    return <h1>Error occured ! Please try again.</h1>;
  }
  if (loading) {
    return <h1>Loading ! Please wait</h1>;
  }
  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
};
export default ScrollToTopAndBottom;
