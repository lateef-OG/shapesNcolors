import React from "react";

import { colors } from "../../constants/colors";

import "./Shape.scss";

const Shape = ({
  shape,
}: {
  shape: { id: number; name: string; color: string };
}) => {
  const { name, color } = shape;
  const colorsMap: { [key: string]: string } = colors;
  return (
    <div className="shape-container">
      <div
        className={name}
        style={
          name === "triangle"
            ? { borderBottomColor: colorsMap[color] }
            : { backgroundColor: colorsMap[color] }
        }
      ></div>
    </div>
  );
};

export default Shape;
