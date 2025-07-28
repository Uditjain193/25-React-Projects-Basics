import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
const Image = () => {
  const [images, setimages] = useState([]);
  const [currentslide, setcurrentslide] = useState(0);
  const [errmsg, seterrmsg] = useState(null);
  const [loading, setloading] = useState(false);
  async function fetchimages() {
    try {
      setloading(true);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=5"
      );
      const data = await response.json();
      if (data) {
        setimages(data);
        setloading(false);
      }
    } catch (e) {
      seterrmsg(e.message);
      setloading(false);
    }
  }
  function handleprev() {
    setcurrentslide(currentslide === 0 ? images.length - 1 : currentslide - 1);
  }
  function handlenext() {
    setcurrentslide(currentslide === images.length - 1 ? 0 : currentslide + 1);
  }
  useEffect(() => {
    fetchimages();
  },[]);
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  if (errmsg !== null) {
    return <div>Error Occured !!!</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handleprev}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((item, index) => (
            <img
              src={item.download_url}
              className={
                currentslide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handlenext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                className={
                  currentslide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setcurrentslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Image;
