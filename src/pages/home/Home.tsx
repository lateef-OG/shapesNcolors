import React from "react";
import Shapes from "../../components/shapes/Shapes";
import { ColorFilters, ShapeFilters } from "../../components/filters/Filters";
import Header from "../../components/header/Header";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <>
        <h4>Filters</h4>
        <ShapeFilters />
        <ColorFilters />
      </>
      <Shapes />
    </div>
  );
};

export default Home;
