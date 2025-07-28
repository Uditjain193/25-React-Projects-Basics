import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeofcolor, settypeofcolor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handlecretehexcolor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for(let i=0;i<6;i++){
        hexcolor+=hex[randomColorUtility(hex.length)]
    }
    setcolor(hexcolor)
  }
  function handlecreatergbcolor(){
    const r=randomColorUtility(256)
    const g=randomColorUtility(256)
    const b=randomColorUtility(256)
    setcolor(`rgb(${r},${g},${b})`)
  }
  useEffect(()=>{
    if(typeofcolor==="rgb")handlecreatergbcolor();
    else handlecretehexcolor()
  },[typeofcolor])
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => settypeofcolor("hex")}>Create HEX Color</button>
      <button onClick={() => settypeofcolor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeofcolor === "hex" ? handlecretehexcolor : handlecreatergbcolor
        }
      >
        Generate Random Color
      </button>
      <div style={{
        display:'flex',
        justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
      }}>
        <h3>{typeofcolor=="rgb"?"RGB Color":"HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
