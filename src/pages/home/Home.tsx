import React from "react";

import data from "../../data/data.json";
import Shapes from "../../components/shapes/Shapes";
import { ColorFilters, ShapeFilters } from "../../components/filters/Filters";
import Header from "../../components/header/Header";

import "./Home.scss";

const colorFilterOptions = ["red", "blue", "green", "yellow", "cyan", "gray"];

const shapeFilterOptions = ["triangle", "oval", "round", "rectangle", "square"];

const Home = () => {
  const [shapes, setShapes] = React.useState<any>([]);

  React.useEffect(() => {
    setShapes(data);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <>
        <h4>Filters</h4>
        <ShapeFilters filters={shapeFilterOptions} />
        <ColorFilters filters={colorFilterOptions} />
      </>
      <Shapes shapes={shapes} title="All items" />
    </div>
  );
};

export default Home;
