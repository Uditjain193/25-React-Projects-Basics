import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

const OutsideClick = () => {
  const [showcontent, setshowcontent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setshowcontent(false));
  return (
    <div>
      {showcontent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setshowcontent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default OutsideClick;
