import React from "react";
import Shape from "../shape/Shape";

import './Shapes.scss';

const Shapes = ({
  shapes,
  title
}: {
  shapes: { id: number; name: string; color: string }[],
  title: string
}) => {
  return (
    <>
    <h4>{title}:</h4>
    <div className="shapes-container">
      {shapes.map((shape) => (
        <Shape shape={shape} key={`shape-${shape.id}`}/>
      ))}
    </div>
    </>
  );
};

export default Shapes;
