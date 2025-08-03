import React from "react";
import useResize from "./useResize";

const WindowResize = () => {
  const windowSize = useResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Use Window resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default WindowResize;
