import React, { useEffect, useState } from "react";
import "./styles.css";
const ScrollIndicator = ({ url }) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [scrollpercentage, setscrollpercentage] = useState(0);

  async function fetchdata(geturl) {
    try {
      const res = await fetch(geturl);
      const data = await res.json();
      if (data && data.products && data.products.length > 0) {
        setdata(data.products);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      seterror(e.message);
    }
  }
  useEffect(() => {
    fetchdata(url);
  }, [url]);

  function handlescrollpercentage() {
    console.log(
      "document.body.scrollTop ",
      document.body.scrollTop,
      "document.documentElement.scrollTop, ",
      document.documentElement.scrollTop,
      "document.documentElement.scrollHeight ",
      document.documentElement.scrollHeight,
      "document.documentElement.clientHeight ",
      document.documentElement.clientHeight
    );
    const howmuchscolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setscrollpercentage((howmuchscolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handlescrollpercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  console.log(data, scrollpercentage);

  if (error) {
    return <div>Error ! {seterror}</div>;
  }

  if (loading) {
    return <div>Loading Data ! Please wait </div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollpercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
