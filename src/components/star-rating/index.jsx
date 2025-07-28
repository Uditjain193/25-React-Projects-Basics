import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'
const Star = ({ noofstar = 5 }) => {
    const [rating,setrating]=useState(0)
    const [hover,sethover]=useState(0)
    function handleclick(currindex){
        setrating(currindex)
    }
    function handlemouseenter(currindex){
        sethover(currindex)
    }
    function handlemouseleave(){
        sethover(rating)
    }
  return (
    <div className="star-rating">
      {[...Array(noofstar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index<=(hover||rating)?"active":"inactive"}
            onClick={() => handleclick(index)}
            onMouseMove={() => handlemouseenter(index)}
            onMouseLeave={() => handlemouseleave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Star;
