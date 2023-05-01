import React, { useState } from "react";
import './SubmitButton.css'

const SubmitButton = ({ clickFunction, textContext }) => {
  const [hoverStylePos, setHoverStylePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [style, setStyle] = useState({});

  const submitHover = (e) => {
    setIsHovering(true);
    let location = {
      x: e.clientX,
      y: e.clientY,
    };
    setHoverStylePos(location);
    setStyle({
      backgroundPosition:
        hoverStylePos.x.toString() + "px, " + hoverStylePos.y.toString() + "px",
    });
  };

  const resetStyle = () => {
    setIsHovering(false);
    setStyle({
      backgroundPosition: "center",
    });
  };

  return (
    <div
      onClick={ clickFunction }
      id={isHovering ? "sb-button_hover" : "sb-button"}
      onMouseMove={(e) => submitHover(e)}
      onMouseLeave={() => resetStyle()}
      style={style}
    >
      {textContext}
    </div>
  );
};

export default SubmitButton;